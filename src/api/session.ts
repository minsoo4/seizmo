export interface CreateSessionResponse {
  sessionId: string;
}

function delay(milliseconds: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, milliseconds);
  });
}

export async function createSession(): Promise<CreateSessionResponse> {
  await delay(1000);

  return {
    sessionId: `session-${Date.now()}`,
  };
}