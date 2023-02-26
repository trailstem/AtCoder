package main

import (
	"fmt"
)

func main() {
	var a, b, c int
	var req []int
	var count int
	fmt.Scan(&a, &b, &c)

	req = append(req, a, b, c)

	for i := 0; i < len(req); i++ {
		if req[i] == 5 || req[i] == 7 {
			count = count + req[i]
		}
	}

	if count == 17 {
		fmt.Println("YES")
	} else {
		fmt.Println("NO")
	}

}
