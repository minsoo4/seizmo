import { useState } from 'react';
import { createSession } from '../api/session';
import Button from '../components/ui/Button';
import './StartScreen.css';

const APP_TITLE = 'SEIZMO';
const APP_DESCRIPTION = 'AI 얼굴 합성으로 만드는 나만의 인생네컷';

function StartScreen() {
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const buttonText = isLoading
    ? '촬영 준비 중...'
    : '촬영 시작하기';

  async function handleCreateSession() {
    setIsLoading(true);
    setErrorMessage(null);

    try {
      const result = await createSession();

      setSessionId(result.sessionId);
    } catch (error) {
      console.error(error);
      setErrorMessage('촬영을 준비하지 못했습니다. 다시 시도해 주세요.');
    } finally {
      setIsLoading(false);
    }
  }

  return (
  <main className="start-screen">
    <section
      className="start-screen__content"
      aria-labelledby="start-title"
    >
      <p className="start-screen__eyebrow">
        AI PHOTO EXPERIENCE
      </p>

      <h1 id="start-title">{APP_TITLE}</h1>

      <p className="start-screen__description">
        {APP_DESCRIPTION}
      </p>

      <Button
        onClick={handleCreateSession}
        disabled={isLoading}
      >
        {buttonText}
      </Button>

      {sessionId && (
        <p role="status">촬영 준비가 완료되었습니다.</p>
      )}

      {errorMessage && (
        <p role="alert">{errorMessage}</p>
      )}
    </section>
  </main>
);
}

export default StartScreen;