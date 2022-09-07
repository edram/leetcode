package util

import (
	"encoding/json"
	"os"
)

func LoadCases[T any](path string) (*T, error) {
	content, err := os.ReadFile(path)
	if err != nil {
		return nil, err
	}

	var payload T
	err = json.Unmarshal(content, &payload)
	if err != nil {
		return nil, err
	}

	return &payload, nil
}
