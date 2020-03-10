<template>
  <div class="container">
    <h1>👓</h1>
    <h1>About</h1>
    <p></p>

    <hr id="top-hr" />
    <div class="article">
      <p></p>

      <h2>Education</h2>
      <p>
        BS, Physics.
      </p>
      <p>
        I like Analytical Mechanics because it's more principle-based than any other
        field in physics.
      </p>

      <h2>Interests</h2>

      
      <h2>What I love to do</h2>
      <h3>Travel</h3>
      <p>
        I'm a travelholic.<br>
        The countries and areas I have ever visited (excluding transit): <br>
          🇲🇾🇹🇭🇨🇳🇰🇷🇹🇼🇭🇰🇲🇴🇰🇭🇻🇳
      </p>

      <h3>Poker</h3>
      <p>
        I'm into texas hold'em ever since I first played it at the casino in Phnom Penh
        in June 2019. Though I usually play $1-3 as a beginner, I'm studying hard so that
        I can play $2-5 profitably.
      </p>

      <h2>Contact</h2>
            <p><font-awesome-icon :icon="['fab', 'keybase']" />
              <a href="https://keybase.io/j0hnta/chat"> Keybase chat</a>
            </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dowwwInfo: {
        stargazers_count: 0,
        forks_count: 0
      },
      bitcsInfo: {
        stargazers_count: 0,
        forks_count: 0
      },
      fatesInfo: {
        stargazers_count: 0,
        forks_count: 0
      },
      sspaiCardInfo: {
        stargazers_count: 0,
        forks_count: 0
      },
      dotfilesInfo: {
        stargazers_count: 0,
        forks_count: 0
      }
    }
  },
  mounted() {
    this.axios
      .get('https://api.github.com/repos/spencerwooo/dowww')
      .then(resp => {
        this.dowwwInfo = resp.data
      })
    this.axios
      .get('https://api.github.com/repos/spencerwooo/BITCS-Coursework')
      .then(resp => {
        this.bitcsInfo = resp.data
      })
    this.axios
      .get('https://api.github.com/repos/SecureCats/Evaluation_BackEnd')
      .then(resp => {
        this.fatesInfo = resp.data
      })
    this.axios
      .get('https://api.github.com/repos/spencerwooo/jsbox-sspai-namecard')
      .then(resp => {
        this.sspaiCardInfo = resp.data
      })
    this.axios
      .get('https://api.github.com/repos/spencerwooo/dotfiles')
      .then(resp => {
        this.dotfilesInfo = resp.data
      })
  }
}
</script>

<style lang="css" scoped>
h2 {
  font-weight: 700;
  font-size: 20px;
  padding: 10px 0;
}

h3 {
  font-weight: 700;
  font-size: 18px;
  padding: 18px 0 0 0;
  margin: 0;
}

.github-project-card {
  border: 1px solid #d1d5da;
  border-radius: 3px;
  padding: 0 15px 15px 15px;
  margin: 10px 0;
}

.github-project-card p {
  line-height: inherit;
}

.github-project-card .github-repo-stats a {
  color: #24292e;
  padding-right: 20px;
  font-size: 14px;
}

.github-project-card .github-repo-stats a:hover {
  border: none;
}

.octicon {
  vertical-align: text-top;
}

ul {
  padding-left: 15px;
  line-height: 30px;
  margin: 0;
}

p {
  line-height: 30px;
}
</style>
