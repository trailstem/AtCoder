package main

import "fmt"

func main() {
	var f [3]int
	var str string

	fmt.Scan(&f[0], &f[1], &f[2], &str)

	var result int
	for i := 0; i < len(f); i++ {
		result += f[i]
	}

	fmt.Println(result, str)
}
