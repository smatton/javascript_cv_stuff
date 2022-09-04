import * as tf from '@tensorflow/tfjs-core';
import '@tensorflow/tfjs-backend-webgl';
 


function tensor_sum(a) {
    const a = tf.tensor(a);
    const b = a.sum();
    return b
}



