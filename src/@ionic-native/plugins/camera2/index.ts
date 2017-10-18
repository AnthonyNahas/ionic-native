import { Injectable } from "@angular/core";
import { Cordova, Plugin, IonicNativePlugin } from '@ionic-native/core';

export interface CameraOptions {
  withPreview?: boolean;
}

@Plugin({
  pluginName: 'Camera2',
  plugin: 'dff-cordova-plugin-camera',
  pluginRef: 'navigator.camera',
  repo: 'https://github.com/apache/cordova-plugin-camera',
  platforms: ['Android']
})

@Injectable()
export class Camera extends IonicNativePlugin {
  @Cordova({
    callbackOrder: 'reverse'
  })
  takePhoto(options?: CameraOptions): Promise<any> {
    return;
  }
}
