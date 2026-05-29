Vue.config.devtools = true;

Vue.component('Card', {
	template: `
    <div class="card-wrap" ref="Card">
      <div class="Card">
        <div class="card-img-section" :style="cardBgImage">
          <a class="card-arrow-btn" href="#" aria-label="View profile">&#8599;</a>
          <div class="card-overlay">
            <h3 class="team-card-title"><slot name="header"></slot></h3>
            <p class="team-card-role"><slot name="role"></slot></p>
            <p class="team-card-desc"><slot name="description"></slot></p>
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


