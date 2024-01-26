import { Resource, Texture } from '@pixi/core';
import { Container } from '@pixi/display';
import { Sprite } from '@pixi/sprite';

export function ButtonWithIcon(iconPath: string, onClick: () => void) {
    const button = new Container();
    button.eventMode = 'static';
    button.cursor = 'pointer';

    const buttonTexture: Texture<Resource> = Texture.from(iconPath);
    const icon: Sprite = new Sprite(buttonTexture);
    icon.width = 15;
    icon.height= 15;
    icon.anchor.set(0.5)
    button.addChild(icon)
    
    const rotateIcon = () => {
        icon.rotation += Math.PI;
    }

    button.on('pointerdown', onClick);

    return { button, rotateIcon }
}