package main

import (
	"fmt"
)

func mensekiResult(a, b, c int) int {
	result := (a + b) * c / 2
	return result
}

func main() {
	var a, b, c int
	fmt.Scan(&a, &b, &c)

	fmt.Println(mensekiResult(a, b, c))
}
