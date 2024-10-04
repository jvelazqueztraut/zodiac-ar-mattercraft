import { ZComponent, ContextManager, Observable, Animation, Layer, LayerClip, Event } from "@zcomponent/core";

import { GLTF as GLTF_0 } from "@zcomponent/three/lib/components/models/GLTF";
import { Animation as Animation_1 } from "@zcomponent/three/lib/behaviors/Animation";
import { Button as Button_2 } from "@zcomponent/html/lib/button";
import { SetLayerOff as SetLayerOff_3 } from "@zcomponent/core/lib/behaviors/SetLayerOff";
import { CSS as CSS_4 } from "@zcomponent/html/lib/CSS";
import { CameraEnvironmentMap as CameraEnvironmentMap_5 } from "@zcomponent/zappar-three/lib/components/environments/CameraEnvironmentMap";
import { CameraTransform as CameraTransform_6 } from "@zcomponent/three/lib/components/transforms/CameraTransform";
import { Div as Div_7 } from "@zcomponent/html/lib/div";
import { DefaultCookieConsent as DefaultCookieConsent_8 } from "@zcomponent/core/lib/components/DefaultCookieConsent";
import { DefaultLoader as DefaultLoader_9 } from "@zcomponent/core/lib/components/DefaultLoader";
import { Group as Group_10 } from "@zcomponent/three/lib/components/Group";
import { DirectionalLight as DirectionalLight_11 } from "@zcomponent/three/lib/components/lights/DirectionalLight";
import { FaceAnchorGroup as FaceAnchorGroup_12 } from "@zcomponent/zappar-three/lib/components/anchorgroups/FaceAnchorGroup";
import { OverrideOpacity as OverrideOpacity_13 } from "@zcomponent/three/lib/behaviors/OverrideOpacity";
import { FaceTracker as FaceTracker_14 } from "@zcomponent/zappar-three/lib/components/trackers/FaceTracker";
import { HTML as HTML_15 } from "@zcomponent/three/lib/components/HTML";
import { HeadMaskMesh as HeadMaskMesh_16 } from "@zcomponent/zappar-three/lib/components/meshes/HeadMaskMesh";
import { H1 as H1_17 } from "@zcomponent/html/lib/headings";
import { Plane as Plane_18 } from "@zcomponent/three/lib/components/meshes/Plane";
import { MeshStandardMaterial as MeshStandardMaterial_19 } from "@zcomponent/three/lib/components/materials/MeshStandardMaterial";
import { Text as Text_20 } from "@zcomponent/three/lib/components/text/Text";
import { ImageTexture as ImageTexture_21 } from "@zcomponent/three/lib/components/textures/ImageTexture";
import { Span as Span_22 } from "@zcomponent/html/lib/span";
import { FaceMesh as FaceMesh_23 } from "@zcomponent/zappar-three/lib/components/meshes/FaceMesh";
import { HueSaturationEffectPass as HueSaturationEffectPass_24 } from "@zcomponent/postprocessing/lib/components/HueSaturationEffect";
import { VignetteEffectPass as VignetteEffectPass_25 } from "@zcomponent/postprocessing/lib/components/VignetteEffect";
import { Img as Img_26 } from "@zcomponent/html/lib/img";
import { MyBehavior as MyBehavior_27 } from "./Behaviors/Slider";
import { VideoRecorderUI as VideoRecorderUI_28 } from "@zcomponent/videorecorder/lib/VideoRecorderUI";
import { ZapparCamera as ZapparCamera_29 } from "@zcomponent/zappar-three/lib/components/cameras/Camera";

interface ConstructorProps {

}

/**
* @zcomponent
* @zicon zcomponent
*/
declare class Comp extends ZComponent {

	constructor(contextManager: ContextManager, constructorProps: ConstructorProps);

	nodes: {
		Bull_1: GLTF_0 & {
			behaviors: {
				0: Animation_1,
				Animation: Animation_1,
			}
		},
		Bull_10: GLTF_0 & {
			behaviors: {
				0: Animation_1,
				Animation: Animation_1,
			}
		},
		Bull_2: GLTF_0 & {
			behaviors: {
				0: Animation_1,
				Animation: Animation_1,
			}
		},
		Bull_3: GLTF_0 & {
			behaviors: {
				0: Animation_1,
				Animation: Animation_1,
			}
		},
		Bull_4: GLTF_0 & {
			behaviors: {
				0: Animation_1,
				Animation: Animation_1,
			}
		},
		Bull_5: GLTF_0 & {
			behaviors: {
				0: Animation_1,
				Animation: Animation_1,
			}
		},
		Bull_6: GLTF_0 & {
			behaviors: {
				0: Animation_1,
				Animation: Animation_1,
			}
		},
		Bull_7: GLTF_0 & {
			behaviors: {
				0: Animation_1,
				Animation: Animation_1,
			}
		},
		Bull_8: GLTF_0 & {
			behaviors: {
				0: Animation_1,
				Animation: Animation_1,
			}
		},
		Bull_9: GLTF_0 & {
			behaviors: {
				0: Animation_1,
				Animation: Animation_1,
			}
		},
		Button: Button_2 & {
			behaviors: {
				0: SetLayerOff_3,
				SetLayerOff: SetLayerOff_3,
			}
		},
		CSS: CSS_4 & {
			behaviors: {

			}
		},
		CameraEnvironmentMap: CameraEnvironmentMap_5 & {
			behaviors: {

			}
		},
		CameraTransform: CameraTransform_6 & {
			behaviors: {

			}
		},
		Card: Div_7 & {
			behaviors: {

			}
		},
		Card_Footer: Div_7 & {
			behaviors: {

			}
		},
		Card_Header: Div_7 & {
			behaviors: {

			}
		},
		DefaultCookieConsent: DefaultCookieConsent_8 & {
			behaviors: {

			}
		},
		DefaultLoader: DefaultLoader_9 & {
			behaviors: {

			}
		},
		Defaults: Group_10 & {
			behaviors: {

			}
		},
		DirectionalLight: DirectionalLight_11 & {
			behaviors: {

			}
		},
		FaceAnchorGroup: FaceAnchorGroup_12 & {
			behaviors: {
				0: OverrideOpacity_13,
			}
		},
		FaceTracker: FaceTracker_14 & {
			behaviors: {

			}
		},
		Fish_glb: GLTF_0 & {
			behaviors: {
				0: Animation_1,
				Animation0: Animation_1,
			}
		},
		Fish_glb0: GLTF_0 & {
			behaviors: {
				0: Animation_1,
				Animation: Animation_1,
			}
		},
		Fish_glb1: GLTF_0 & {
			behaviors: {
				0: Animation_1,
				Animation: Animation_1,
			}
		},
		Fish_glb2: GLTF_0 & {
			behaviors: {
				0: Animation_1,
				Animation: Animation_1,
			}
		},
		Fish_glb3: GLTF_0 & {
			behaviors: {
				0: Animation_1,
				Animation: Animation_1,
			}
		},
		Fish_glb4: GLTF_0 & {
			behaviors: {
				0: Animation_1,
				Animation: Animation_1,
			}
		},
		Fish_glb5: GLTF_0 & {
			behaviors: {
				0: Animation_1,
				Animation: Animation_1,
			}
		},
		Fish_glb6: GLTF_0 & {
			behaviors: {
				0: Animation_1,
				Animation: Animation_1,
			}
		},
		Fish_glb7: GLTF_0 & {
			behaviors: {
				0: Animation_1,
				Animation: Animation_1,
			}
		},
		Fish_glb8: GLTF_0 & {
			behaviors: {
				0: Animation_1,
				Animation: Animation_1,
			}
		},
		HTML: HTML_15 & {
			behaviors: {

			}
		},
		HeadMaskMesh: HeadMaskMesh_16 & {
			behaviors: {

			}
		},
		Heading: H1_17 & {
			behaviors: {

			}
		},
		Horse_1: GLTF_0 & {
			behaviors: {
				0: Animation_1,
				Animation: Animation_1,
			}
		},
		Horse_10: GLTF_0 & {
			behaviors: {
				0: Animation_1,
				Animation: Animation_1,
			}
		},
		Horse_2: GLTF_0 & {
			behaviors: {
				0: Animation_1,
				Animation: Animation_1,
			}
		},
		Horse_3: GLTF_0 & {
			behaviors: {
				0: Animation_1,
				Animation: Animation_1,
			}
		},
		Horse_4: GLTF_0 & {
			behaviors: {
				0: Animation_1,
				Animation: Animation_1,
			}
		},
		Horse_5: GLTF_0 & {
			behaviors: {
				0: Animation_1,
				Animation: Animation_1,
			}
		},
		Horse_6: GLTF_0 & {
			behaviors: {
				0: Animation_1,
				Animation: Animation_1,
			}
		},
		Horse_7: GLTF_0 & {
			behaviors: {
				0: Animation_1,
				Animation: Animation_1,
			}
		},
		Horse_8: GLTF_0 & {
			behaviors: {
				0: Animation_1,
				Animation: Animation_1,
			}
		},
		Horse_9: GLTF_0 & {
			behaviors: {
				0: Animation_1,
				Animation: Animation_1,
			}
		},
		MoonIndicator: Plane_18 & {
			behaviors: {

			}
		},
		MoonIndicator_Material: MeshStandardMaterial_19 & {
			behaviors: {

			}
		},
		Moon_Text: Text_20 & {
			behaviors: {

			}
		},
		Moon_symbol_png: ImageTexture_21 & {
			behaviors: {

			}
		},
		Paragraph: Span_22 & {
			behaviors: {

			}
		},
		Piscis: Group_10 & {
			behaviors: {

			}
		},
		Piscis0: Group_10 & {
			behaviors: {

			}
		},
		Piscis_Animals: Group_10 & {
			behaviors: {

			}
		},
		Pisicis_FaceMesh: FaceMesh_23 & {
			behaviors: {

			}
		},
		Pisicis_FaceMeshTexture: ImageTexture_21 & {
			behaviors: {

			}
		},
		Pisicis_HueSaturationEffectPass: HueSaturationEffectPass_24 & {
			behaviors: {

			}
		},
		Pisicis_StandardMaterial: MeshStandardMaterial_19 & {
			behaviors: {

			}
		},
		Pisicis_VignetteEffectPass: VignetteEffectPass_25 & {
			behaviors: {

			}
		},
		Post_processing: Group_10 & {
			behaviors: {

			}
		},
		RisingIndicator: Plane_18 & {
			behaviors: {

			}
		},
		RisingIndicator_Material: MeshStandardMaterial_19 & {
			behaviors: {

			}
		},
		Rising_Text: Text_20 & {
			behaviors: {

			}
		},
		Rising_symbol_png: ImageTexture_21 & {
			behaviors: {

			}
		},
		Sagittarius: Group_10 & {
			behaviors: {

			}
		},
		Sagittarius0: Group_10 & {
			behaviors: {

			}
		},
		Sagittarius_Animals: Group_10 & {
			behaviors: {

			}
		},
		Sagittarius_FaceMesh: FaceMesh_23 & {
			behaviors: {

			}
		},
		Sagittarius_FaceMeshTexture: ImageTexture_21 & {
			behaviors: {

			}
		},
		Sagittarius_HueSaturationEffectPass: HueSaturationEffectPass_24 & {
			behaviors: {

			}
		},
		Sagittarius_StandardMaterial: MeshStandardMaterial_19 & {
			behaviors: {

			}
		},
		Sagittarius_VignetteEffectPass: VignetteEffectPass_25 & {
			behaviors: {

			}
		},
		Shape_Image: Img_26 & {
			behaviors: {

			}
		},
		SunIndicator: Plane_18 & {
			behaviors: {

			}
		},
		SunIndicator_Material: MeshStandardMaterial_19 & {
			behaviors: {

			}
		},
		Sun_Text: Text_20 & {
			behaviors: {

			}
		},
		Sun_symbol_png: ImageTexture_21 & {
			behaviors: {

			}
		},
		Taurus: Group_10 & {
			behaviors: {

			}
		},
		Taurus0: Group_10 & {
			behaviors: {

			}
		},
		Taurus_Animals: Group_10 & {
			behaviors: {

			}
		},
		Taurus_FaceMesh: FaceMesh_23 & {
			behaviors: {

			}
		},
		Taurus_FaceMeshTexture: ImageTexture_21 & {
			behaviors: {

			}
		},
		Taurus_HueSaturationEffectPass: HueSaturationEffectPass_24 & {
			behaviors: {

			}
		},
		Taurus_StandardMaterial: MeshStandardMaterial_19 & {
			behaviors: {

			}
		},
		Taurus_VignetteEffectPass: VignetteEffectPass_25 & {
			behaviors: {

			}
		},
		TouchIndicator: Plane_18 & {
			behaviors: {
				0: MyBehavior_27,
				MyBehavior: MyBehavior_27,
			}
		},
		TouchIndicator_Material: MeshStandardMaterial_19 & {
			behaviors: {

			}
		},
		VideoRecorderUI: VideoRecorderUI_28 & {
			behaviors: {

			}
		},
		ZapparCamera: ZapparCamera_29 & {
			behaviors: {

			}
		},
		ZodiacAR_logo_white_png: ImageTexture_21 & {
			behaviors: {

			}
		},
	};

	animation: Animation & { layers: {
		Signs: Layer & { clips: {
			Sagittarius0: LayerClip;
			Taurus0: LayerClip;
			Piscis0: LayerClip;
		}};
		Animals: Layer & { clips: {
			Rotation0: LayerClip;
		}};
		UI: Layer & { clips: {
			On: LayerClip;
		}};
		AnchorVisibility: Layer & { clips: {
			Hidden0: LayerClip;
			Visible0: LayerClip;
		}};
	}};

	/**
	 * The position, in 3D space, of this node relative to its parent. The three elements of the array correspond to the `x`, `y`, and `z` components of position.
	 * 
	 * @zprop
	 * @zdefault [0,0,0]
	 * @zgroup Transform
	 * @zgrouppriority 10
	 */
	public position: Observable<[x: number, y: number, z: number]>;

	/**
	 * The rotation, in three dimensions, of this node relative to its parent. The three elements of the array correspond to Euler angles - yaw, pitch and roll.
	 * 
	 * @zprop
	 * @zdefault [0,0,0]
	 * @zgroup Transform
	 * @zgrouppriority 10
	 */
	public rotation: Observable<[x: number, y: number, z: number]>;

	/**
	 * The scale, in three dimensions, of this node relative to its parent. The three elements of the array correspond to scales in the the `x`, `y`, and `z` axis.
	 * 
	 * @zprop
	 * @zdefault [1,1,1]
	 * @zgroup Transform
	 * @zgrouppriority 10
	 */
	public scale: Observable<[x: number, y: number, z: number]>;

	/**
	 * Determines if this object and its children are rendered to the screen.
	 * 
	 * @zprop
	 * @zdefault true
	 * @zgroup Appearance
	 * @zgrouppriority 11
	 */
	public visible: Observable<boolean>;
}

export default Comp;
