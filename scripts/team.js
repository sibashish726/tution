Vue.config.devtools = true;

Vue.component('Card', {
	template: `
    <div class="card-wrap" ref="Card">
      <div class="Card">
        <div class="card-info">
          <div class="team-card-title-row">
            <h3 class="team-card-title"><slot name="header"></slot></h3>
            <span class="team-card-sparkle">&#10022;</span>
          </div>
          <div class="card-Bg" :style="cardBgImage"></div>
          <p class="team-card-role"><slot name="role"></slot></p>
          <div class="team-card-tags"><slot name="tags"></slot></div>
          <div class="team-card-links"><slot name="content"></slot></div>
        </div>
      </div>
    </div>`,
	mounted() {},
	props: ['dataImage'],
	data: () => ({}),

	computed: {
		cardBgImage() {
			return {
				backgroundImage: `url(${this.dataImage})`
			};
		}
	}
});

const board = new Vue({
	el: '#board'
});

const facalities = new Vue({
	el: '#facalities'
});

const technical = new Vue({
	el: '#technical'
});


