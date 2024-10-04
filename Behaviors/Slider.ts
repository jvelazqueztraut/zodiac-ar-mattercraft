import { Component, Behavior, BehaviorConstructorProps, ContextManager, registerBehaviorRunAtDesignTime, Animation } from "@zcomponent/core";
import { Plane as Plane } from "@zcomponent/three/lib/components/meshes/Plane";
import { default as Scene} from "../Scene.zcomp";
import { DragControls } from 'three/examples/jsm/controls/DragControls.js';
import { useRenderer } from '@zcomponent/three/lib/context';
import { AnimationClip, Vector3 } from "three";

interface ConstructionProps {
	// Add any constructor props you'd like for your behavior here
}

/**
 * @zbehavior 
 * @zparents three/Object3D/Mesh/Plane
 **/
export class MyBehavior extends Behavior<Plane> {

	protected zcomponent = this.getZComponentInstance(Scene);
	dragControls: DragControls;
		

	constructor(contextManager: ContextManager, instance: Plane, protected constructorProps: ConstructionProps) {
		super(contextManager, instance);

		const renderer = useRenderer(contextManager);

		// Initialize DragControls
		this.dragControls = new DragControls([this.instance.element], this.zcomponent.nodes.ZapparCamera.element, renderer.domElement);

		this.dragControls.addEventListener('drag', (event) => {
			// Restrict movement to x and y axis
			event.object.position.z = 0; // Lock z-axis

			const touchPos = event.object.position;

			const distSun = this.zcomponent.nodes.SunIndicator.element.position.distanceToSquared(touchPos); 
			const distMoon = this.zcomponent.nodes.MoonIndicator.element.position.distanceToSquared(touchPos); 
			const distRising = this.zcomponent.nodes.RisingIndicator.element.position.distanceToSquared(touchPos); 

			if(distSun < distMoon && distSun < distRising){
				// Enable Piscis sign if distance is closest to Sun indicator
				this.zcomponent.animation.layers.Signs.clips.Piscis0.play();
				this.zcomponent.nodes.Sun_Text.element.visible = false;
			}
			else if (distMoon < distSun && distMoon < distRising){
				// Enable Taurus sign if distance is closest to Moon indicator
				this.zcomponent.animation.layers.Signs.clips.Taurus0.play();
				this.zcomponent.nodes.Moon_Text.element.visible = false;
			}
			else{
				// Enable Sagittarius sign if distance is closest to Rising indicator
				this.zcomponent.animation.layers.Signs.clips.Sagittarius0.play();
				this.zcomponent.nodes.Rising_Text.element.visible = false;
			}

		});
	}

	dispose() {
		// Clean up any resources
		// ...
		return super.dispose();
	}
}

// Uncomment below to run this behavior at design time
// registerBehaviorRunAtDesignTime(MyBehavior);
