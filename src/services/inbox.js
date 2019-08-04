const inboxService = store => (pageNo, setEmails) => {
  const fetchData = async () => {
    try {
      const data = await store.API.inbox.getEmails(pageNo);
      setEmails(data);
    } catch (_err) {
      setEmails({ error: 'Cannot fetch inbox emails' });
    }
  };

  fetchData();
};

export default inboxService;
