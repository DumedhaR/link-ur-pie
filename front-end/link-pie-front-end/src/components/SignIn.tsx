import { GoogleLogin, googleLogout } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { useState } from 'react';

interface GoogleUser {
  name: string;
  email: string;
  picture: string;
  sub: string; // Google user ID
}

export default function GoogleLoginButton() {
  const [user, setUser] = useState<GoogleUser | null>(null);

  return (
    <div className="p-4 text-center">
      {user ? (
        <div>
          <img src={user.picture} alt="User" className="w-16 h-16 rounded-full mx-auto" />
          <h2 className="text-lg mt-2">{user.name}</h2>
          <p className="text-sm text-gray-500">{user.email}</p>
          <button
            onClick={() => {
              googleLogout();
              setUser(null);
            }}
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
          >
            Logout
          </button>
        </div>
      ) : (
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            if (credentialResponse.credential) {
              const decoded: GoogleUser = jwtDecode(credentialResponse.credential);
              console.log("Decoded Google User", decoded);

              // Send token to backend if needed
              // fetch('/api/auth/google', { method: 'POST', body: JSON.stringify({ token: credentialResponse.credential }) })

              setUser(decoded);
            }
          }}
          onError={() => {
            console.log('Login Failed');
          }}
          theme="outline"  // Change the theme (default or outline)
          size="large"      // Set button size (small, medium, large)
          text="signin_with" // Customize the button text (default: 'Sign in with Google')
          shape="circle"    // Set button shape (circle or pill)
          width="full"      // Makes the button full widthy
        />
      )}
    </div>
  );
}
