import Layout from "../Layout/Layout";
import { useAuth } from "../Provider/Auth/AuthProvider";

const ProfilePage = () => {
  const userData = useAuth();
  return (
    <Layout>
      <p>Profile data</p>
      <p>{userData}</p>
    </Layout>
  );
};

export default ProfilePage;
