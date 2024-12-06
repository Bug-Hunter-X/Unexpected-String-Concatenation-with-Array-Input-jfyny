# Unexpected String Concatenation with Array Input in TypeScript

This example demonstrates an unexpected behavior when passing an array to a function expecting a string in TypeScript. The function attempts to concatenate the array elements directly, resulting in an unexpected output.

## Bug

The `greeter` function is designed to greet a person by their name (a string). However, when an array is passed as input, the function unexpectedly concatenates the array elements without any separation.

## Solution

The solution involves type checking to ensure the input is a string and handling the case where the input is an array appropriately. In this example, we join array elements with a space to generate a single string before greeting.