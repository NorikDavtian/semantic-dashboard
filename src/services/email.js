const emailService = store => (emailId, setEmail) => {
  console.log('emailId');
  const fetchData = async () => {
    try {
      console.log('emailId from service', emailId);
      const data = await store.API.email.getEmail(emailId);
      setEmail(data);
    } catch (_err) {
      setEmail({ error: 'Cannot fetch email' });
    }
  };

  fetchData();
};

export default emailService;
