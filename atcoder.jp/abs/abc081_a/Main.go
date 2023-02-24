package main

import (
	"fmt"
)

func main() {
	var m string
	var result int

	fmt.Scan(&m)

	for _, res := range m {
		if string(res) == "1" {
			result++
		}
	}
	fmt.Println(result)
}
