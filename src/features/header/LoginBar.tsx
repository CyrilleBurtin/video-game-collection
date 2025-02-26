import RegistrationModale from '@/features/_registration/component/RegistrationModale';
import LoginModale from '@/features/login/components/LoginModale';

const LoginBar = () => {
  return (
    <>
      <div className="flex gap-4">
        <LoginModale />
        <RegistrationModale />
      </div>
    </>
  );
};

export default LoginBar;
