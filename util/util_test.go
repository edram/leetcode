package util

import (
	"fmt"
	"testing"
)

type UniqueLetterStringCase struct {
	Input string

	Output int
}

func TestLoadCases(t *testing.T) {
	cases, err := LoadCases[[]UniqueLetterStringCase]("./cases.json")

	if err != nil {
		t.Error(err)
	}

	fmt.Print(cases)
}
