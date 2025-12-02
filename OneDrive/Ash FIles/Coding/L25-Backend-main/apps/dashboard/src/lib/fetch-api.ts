import { cookies, headers } from "next/headers";

export async function fetchApi<T>(path: string): Promise<T> {
  const reqHeaders = await headers();
  const host = reqHeaders.get("host");
  const protocol = reqHeaders.get("x-forwarded-proto") || "https";
  const isLocalhost = !host || host.includes("localhost");
  const cookieStore = await cookies();
  
  // Use relative URLs in production (same origin), absolute URL only for localhost
  const baseUrl = isLocalhost
    ? "http://localhost:3001"
    : `${protocol}://${host}`;
  
  const response = await fetch(`${baseUrl}${path}`, {
    headers: {
      Cookie: `saas_microservices_authed_user=${
        cookieStore.get("saas_microservices_authed_user")?.value || ""
      }`,
    },
    credentials: "include", // Include cookies in the request
  });
  
  if (!response.ok) {
    throw new Error(`API request failed: ${response.status} ${response.statusText}`);
  }
  
  return response.json() as Promise<T>;
}
