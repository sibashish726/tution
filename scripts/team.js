Vue.config.devtools = true;

Vue.component('Card', {
	template: `
    <div class="card-wrap" ref="Card">
      <div class="Card">
        <div class="card-img-section" :style="cardBgImage">
          <div class="card-img-gradient"></div>
          <h3 class="team-card-title"><slot name="header"></slot></h3>
        </div>
        <div class="card-bottom">
          <p class="team-card-role"><slot name="role"></slot></p>
          <div class="card-footer-row">
            <div class="team-card-tags"><slot name="tags"></slot></div>
            <div class="team-card-links"><slot name="content"></slot></div>
          </div>
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


