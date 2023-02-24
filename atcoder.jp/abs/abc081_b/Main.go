package main

import "fmt"

func main() {
	var reqCount int
	var req int
	var target []int
	var count int
	fmt.Scan(&reqCount)

	for i := 0; i < reqCount; i++ {
		fmt.Scan(&req)
		target = append(target, req)
	}
	judge := true
	for judge {
		for j := 0; j < len(target); j++ {
			if target[j]%2 == 0 {
				target[j] /= 2
			} else {
				judge = false
			}
		}

		if judge {
			count++
		}
	}
	fmt.Println(count)
}
