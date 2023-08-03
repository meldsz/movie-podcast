import { renderHook } from "@testing-library/react";
import { useSearch } from "./useSearch";

describe("useSearch", () => {
    test("Default value of `state` should be initial state", () => {
        const { result } = renderHook(() => useSearch());
        const [state] = result.current
        expect(state).toEqual({
            search: '',
            selected: '',
            inputValue: ''
        });
    });
});