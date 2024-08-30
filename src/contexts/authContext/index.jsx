const AuthContext = React.createContext();
export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const[userLoggedIn, setUserLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);
  return /*#__PURE__*/React.createElement(AuthContext.Provider, {
    value: {
      user
    }
  }, !loading && children);
}