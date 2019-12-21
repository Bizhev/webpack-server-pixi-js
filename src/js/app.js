import * as PIXI from 'pixi.js';

class ParticleText {
	constructor(){
		this.app = new PIXI.Application();
		document.body.appendChild(this.app.view);
		this.addObjects();
	}
	addObjects(){
		PIXI.loader.add('bunny', '../img/BMWi8.jpg').load((loader, resources) => {
			this.bunny = new PIXI.Sprite(resources.bunny.texture);
			this.bunny.texture.frame = new PIXI.Rectangle(132,132,132,132);

			// Setup the position of the bunny
			this.bunny.x = this.app.renderer.width / 2;
			this.bunny.y = this.app.renderer.height / 2;

			// Rotate around the center
			this.bunny.anchor.x = 0.5;
			this.bunny.anchor.y = 0.5;

			// Add the bunny to the scene we are building
			this.app.stage.addChild(this.bunny);
			this.animate();
		});

	}
	animate(){
		// Listen for frame updates
		this.app.ticker.add(() => {
			// each frame we spin the bunny around a bit
			this.bunny.rotation += 0.01;
		});
	}
}

let pop = new ParticleText();
console.log('p',pop);
