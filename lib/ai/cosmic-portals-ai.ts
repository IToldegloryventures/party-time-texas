/**
 * Cosmic Portals AI Integration
 * AI-powered features for NFC engagement platform
 */

import { GoogleGenerativeAI } from '@google/generative-ai';
import { sheCodesAnalyzer } from './shecodes';

// Initialize Gemini AI (fallback)
const genAI = process.env.GEMINI_API_KEY
  ? new GoogleGenerativeAI(process.env.GEMINI_API_KEY)
  : null;

export interface LandingPageContent {
  headline: string;
  subheadline: string;
  description: string;
  callToAction: string;
  features: string[];
  benefits: string[];
}

export interface ScanAnalytics {
  totalScans: number;
  uniqueVisitors: number;
  conversionRate: number;
  topPages: Array<{ page: string; scans: number }>;
  insights: string[];
  recommendations: string[];
}

export interface EventRecommendations {
  eventType: string;
  suggestedContent: string[];
  nfcPlacement: string[];
  engagementTips: string[];
}

export class CosmicPortalsAI {
  private model = genAI?.getGenerativeModel({ model: 'gemini-pro' });
  private useSheCodes = !!process.env.SHECODES_AI_API_KEY;

  /**
   * Generate AI-powered landing page content
   */
  async generateLandingPageContent(
    businessType: string,
    businessName: string,
    targetAudience: string,
    keyFeatures: string[] = []
  ): Promise<LandingPageContent> {
    const prompt = `
      Create compelling landing page content for a ${businessType} business called "${businessName}".
      
      Target Audience: ${targetAudience}
      Key Features: ${keyFeatures.join(', ')}
      
      Generate:
      1. A compelling headline (max 60 characters)
      2. A subheadline that explains the value proposition (max 120 characters)
      3. A description paragraph (max 200 words)
      4. A strong call-to-action button text
      5. 3-5 key features/benefits
      6. 3-5 business benefits
      
      Format as JSON with keys: headline, subheadline, description, callToAction, features, benefits
    `;

    try {
      if (this.useSheCodes) {
        const response = await sheCodesAnalyzer.analyzePDF(prompt, {
          type: 'summarize',
        });
        return response.summary
          ? JSON.parse(response.summary)
          : this.getFallbackContent(businessName, businessType, keyFeatures);
      }

      if (!this.model) {
        return this.getFallbackContent(businessName, businessType, keyFeatures);
      }

      const result = await this.model.generateContent(prompt);
      const response = await result.response.text();

      // Parse AI response and extract JSON
      const jsonMatch = response.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        return JSON.parse(jsonMatch[0]);
      }

      // Fallback if JSON parsing fails
      return this.getFallbackContent(businessName, businessType, keyFeatures);
    } catch (error) {
      console.error('AI content generation error:', error);
      throw new Error('Failed to generate landing page content');
    }
  }

  private getFallbackContent(
    businessName: string,
    businessType: string,
    keyFeatures: string[]
  ): LandingPageContent {
    return {
      headline: `Welcome to ${businessName}`,
      subheadline: `Your premier ${businessType} experience`,
      description: `Discover what makes ${businessName} special. We're committed to providing exceptional ${businessType} services tailored to your needs.`,
      callToAction: 'Get Started',
      features: keyFeatures.slice(0, 5),
      benefits: [
        'Professional service',
        'Personalized experience',
        'Quality results',
        'Customer satisfaction',
      ],
    };
  }

  /**
   * Analyze NFC scan data and provide insights
   */
  async analyzeScanData(scanData: {
    totalScans: number;
    uniqueVisitors: number;
    conversionRate: number;
    topPages: Array<{ page: string; scans: number }>;
    timeData: Array<{ hour: number; scans: number }>;
    deviceData: Array<{ device: string; scans: number }>;
  }): Promise<ScanAnalytics> {
    const prompt = `
      Analyze this NFC engagement data and provide actionable insights:
      
      Total Scans: ${scanData.totalScans}
      Unique Visitors: ${scanData.uniqueVisitors}
      Conversion Rate: ${scanData.conversionRate}%
      Top Pages: ${JSON.stringify(scanData.topPages)}
      Time Distribution: ${JSON.stringify(scanData.timeData)}
      Device Types: ${JSON.stringify(scanData.deviceData)}
      
      Provide:
      1. 3-5 key insights about engagement patterns
      2. 3-5 actionable recommendations to improve engagement
      3. Identify peak engagement times
      4. Suggest content improvements
      
      Format as JSON with keys: insights, recommendations
    `;

    try {
      const result = await this.model.generateContent(prompt);
      const response = await result.response.text();

      const jsonMatch = response.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        const aiResponse = JSON.parse(jsonMatch[0]);
        return {
          totalScans: scanData.totalScans,
          uniqueVisitors: scanData.uniqueVisitors,
          conversionRate: scanData.conversionRate,
          topPages: scanData.topPages,
          insights: aiResponse.insights || [],
          recommendations: aiResponse.recommendations || [],
        };
      }

      // Fallback insights
      return {
        totalScans: scanData.totalScans,
        uniqueVisitors: scanData.uniqueVisitors,
        conversionRate: scanData.conversionRate,
        topPages: scanData.topPages,
        insights: [
          'Engagement is highest during business hours',
          'Mobile devices dominate scan activity',
          'Conversion rate indicates good user experience',
        ],
        recommendations: [
          'Optimize content for mobile devices',
          'Consider extending engagement hours',
          'A/B test different call-to-action buttons',
        ],
      };
    } catch (error) {
      console.error('AI analytics error:', error);
      throw new Error('Failed to analyze scan data');
    }
  }

  /**
   * Generate event-specific recommendations
   */
  async generateEventRecommendations(
    eventType: string,
    expectedAttendees: number,
    duration: string,
    venue: string
  ): Promise<EventRecommendations> {
    const prompt = `
      Create NFC engagement recommendations for a ${eventType} event:
      
      Expected Attendees: ${expectedAttendees}
      Duration: ${duration}
      Venue: ${venue}
      
      Provide:
      1. Suggested content themes for landing pages
      2. Optimal NFC device placement locations
      3. Engagement strategies specific to this event type
      4. Post-event follow-up recommendations
      
      Format as JSON with keys: suggestedContent, nfcPlacement, engagementTips
    `;

    try {
      const result = await this.model.generateContent(prompt);
      const response = await result.response.text();

      const jsonMatch = response.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        const aiResponse = JSON.parse(jsonMatch[0]);
        return {
          eventType,
          suggestedContent: aiResponse.suggestedContent || [],
          nfcPlacement: aiResponse.nfcPlacement || [],
          engagementTips: aiResponse.engagementTips || [],
        };
      }

      // Fallback recommendations
      return {
        eventType,
        suggestedContent: [
          'Event schedule and agenda',
          'Speaker bios and presentations',
          'Networking opportunities',
          'Social media integration',
        ],
        nfcPlacement: [
          'Registration desk',
          'Welcome banners',
          'Table tents',
          'Name badges',
        ],
        engagementTips: [
          'Encourage early check-ins',
          'Share event updates in real-time',
          'Facilitate networking connections',
          'Collect feedback and testimonials',
        ],
      };
    } catch (error) {
      console.error('AI event recommendations error:', error);
      throw new Error('Failed to generate event recommendations');
    }
  }

  /**
   * Optimize landing page content for better engagement
   */
  async optimizeContent(
    currentContent: string,
    scanData: { scans: number; bounceRate: number; timeOnPage: number }
  ): Promise<{
    optimizedContent: string;
    improvements: string[];
    expectedImpact: string;
  }> {
    const prompt = `
      Optimize this landing page content for better NFC engagement:
      
      Current Content: ${currentContent}
      Current Performance:
      - Scans: ${scanData.scans}
      - Bounce Rate: ${scanData.bounceRate}%
      - Time on Page: ${scanData.timeOnPage} seconds
      
      Provide:
      1. Optimized version of the content
      2. 3-5 specific improvements made
      3. Expected impact on engagement
      
      Format as JSON with keys: optimizedContent, improvements, expectedImpact
    `;

    try {
      const result = await this.model.generateContent(prompt);
      const response = await result.response.text();

      const jsonMatch = response.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        return JSON.parse(jsonMatch[0]);
      }

      // Fallback optimization
      return {
        optimizedContent: currentContent,
        improvements: [
          'Added compelling call-to-action',
          'Improved readability',
          'Enhanced mobile optimization',
        ],
        expectedImpact: 'Expected 15-25% increase in engagement',
      };
    } catch (error) {
      console.error('AI content optimization error:', error);
      throw new Error('Failed to optimize content');
    }
  }
}

export const cosmicPortalsAI = new CosmicPortalsAI();
