import modifyBinaryMath from '../../common/builders/binary-math';
import binaryOperation from '../../common/workers/binary-operation';

export default new D3NE.Component('Distance', {
    builder(node) {
        modifyBinaryMath(node);

        return node;
    },
    worker(node, inputs, outputs) {
        outputs[0] = binaryOperation(inputs, 'abs(a - b)');
    }
});