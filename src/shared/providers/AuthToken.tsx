import { createContext, useContext, useState } from 'react';

type AuthTokenType = any;

// Crie o contexto com o tipo correto
const AuthContext = createContext<{ authToken: AuthTokenType; setAuthToken: (token: AuthTokenType) => void }>({
  authToken: null,
  setAuthToken: () => {},
});

export const AuthProvider: React.FC = ({ children }: any) => {
  const [authToken, setAuthToken] = useState<AuthTokenType>(null);

  return (
    <AuthContext.Provider value={{ authToken, setAuthToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
};
