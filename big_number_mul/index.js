'use strict';

const big_number_mul = (x, y) => {
    if (typeof x !== 'string' || typeof y !== 'string') {
        throw 'argument error'
    }

    if (!x.length || !y.length) {
        return '0'
    }

    if (x.length <= 7 && y.length <= 7) {
        return (parseInt(x) * parseInt(y)).toString()
    }

    const x_high = x.length > 7 ? x.slice(0, x.length - 7) : ''
    const x_low = x.slice(-7)
    const y_high = y.length > 7 ? y.slice(0, y.length - 7) : ''
    const y_low = y.slice(-7)

    return big_number_add(
            big_number_add(big_number_mul(x_high, y_high) + '00000000000000', big_number_add(
                big_number_mul(x_high, y_low),
                big_number_mul(x_low, y_high)
            ) + '0000000'),
            big_number_mul(x_low, y_low)
        )


}

const big_number_add = (x, y) => {
    if (typeof x !== 'string' || typeof y !== 'string') {
        throw 'argument error'
    }

    if (x.length <= 15 && y.length <= 15) {
        return (parseInt(x) + parseInt(y)).toString()
    }

    let x_array = x.split('').reverse(), y_array = y.split('').reverse()
    const length = Math.max(x_array.length, y_array.length), result = []
    let carry = 0
    for (let i = 0; i < length; i++) {
        if (x_array[i]) {
            carry += parseInt(x_array[i])
        }
        if (y_array[i]) {
            carry += parseInt(y_array[i])
        }
        if (carry >= 10) {
            result.push((carry - 10).toString())
            carry = 1
        } else {
            result.push(carry.toString())
            carry = 0
        }
    }

    if(carry === 1) {
        result.push('1')
    }

    return result.reverse().join('')
}

console.log(big_number_mul('1111111111111111111111111111111111111111111111111111111111111111111111111111111111111', '222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222'))
