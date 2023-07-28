import Layout from "../Layout/Layout";
import { useAuth } from "../Provider/Auth/AuthProvider";

const ProfilePage = () => {
  const userData = JSON.parse(useAuth());
  return (
    <Layout>
      <p>Profile data</p>
      <p>{userData.name}</p>
    </Layout>
  );
};

export default ProfilePage;
