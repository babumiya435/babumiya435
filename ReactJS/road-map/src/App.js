import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div class="blurred-box">
      <div class="user-login-box">
        <span class="user-icon"></span>
        <div class="user-name">Sameer Mohammad</div>
        <input class="user-password" type="text" />
        <div style="margin-top: 20px;">
          <button type="button" class="btn btn-light"
            style="height: 34px;opacity: 0.8;background: local;color: white;">
            Welcome
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
