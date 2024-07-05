import { random, randomColor } from './utilities.js';

registerPaint(
    'huodinibg',
    class {
        static get inputProperties() {
            return [
                '--size',
                '--box-size',
                '--min-box-size',
                '--max-line-width',
                '--min-line-width',
            ];
        }
        paint(ctx, geom, props) {
            const width = geom.width;
            const height = geom.height;
            const boxSize = props.get('--box-size');
            const maxLineWidth = parseInt(props.get('--max-line-width'));
            const minLineWidth = parseInt(props.get('--min-line-width'));
            ctx.lineWidth = random(minLineWidth, maxLineWidth);

            for (let y = 0; y < height / boxSize; y++) {
                for (let x = 0; x < width / boxSize; x++) {
                    ctx.strokeStyle = randomColor();
                    ctx.strokeRect(x * boxSize, y * boxSize, boxSize, boxSize);
                }
            }
        }
    }
);
