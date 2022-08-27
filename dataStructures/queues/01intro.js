//the queue data structure is a sequential collection of elements that follows the principle of first in first out (FIFO)
// the first element inserted into the queue is also the first element to be removed
//it is an abstract data type as well it is defined by its behavior rather than being a mathematical model

//USAGE
//printers when you try print multiple documents
//CPU's when task scheduling
//the callback queue which is used in javascript runtime to determine the order in which your code executes

//------------CIRCULAR QUEUE---------------
//the size of the queue is fixed and a single block of memory is used as if the first element is connected to the last element
//also referred to as circular buffer or ring buffer and follows the FIFO principle
//a circular queue will reuse the empty block created during the dequeue operation
//when working with queues of fixed maximum size a circular queue is a great implementation choice