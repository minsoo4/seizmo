import { useState } from 'react';
import { createSession } from '../api/session';

const APP_TITLE = 'SEIZMO';
const APP_DESCRIPTION = 'AI face-swap photo'

function StartScreen() {
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);


  const sessionText = sessionId ?? 'No session created yet';
  const buttonText = isLoading ? 'Creating session...' : 'Create session';

  async function handleCreateSession() {
    setIsLoading(true);
    setErrorMessage(null);

    try {
      const result = await createSession();

      setSessionId(result.sessionId);
    } catch (error) {
      console.error(error);
      setErrorMessage('Failed to create session');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main>
      <h1>{APP_TITLE}</h1>
      <p>{APP_DESCRIPTION}</p>

      <p>{sessionText}</p>

      {errorMessage && (
        <p role="alert" style={{ color: 'red' }}>
          {errorMessage}
        </p>
      )}

      <button
        type="button"
        onClick={handleCreateSession}
        disabled={isLoading}
      >
        {buttonText}
      </button>
    </main>
  );
}

export default StartScreen;