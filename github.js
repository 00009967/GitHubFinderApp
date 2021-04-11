class GitHub {
  constructor() {
    this.client_id = '13b52df6d404e6c23ac3';
    this.client_secret = 'e37f848f3917a17bbd65481e75192fe3d6ce9075';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?cleint_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    return {
      profile
    }
  }
}