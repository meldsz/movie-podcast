import { renderHook, act } from "@testing-library/react";
import { useModal } from "./useModal";

describe("useModal", () => {
    test("Default value of `isModalOpen` is `false`", () => {
        const { result } = renderHook(() => useModal());
        expect(result.current.isModalOpen).toBeFalsy();
    });

    test("The `openModal` should correctly change `isModalOpen` state", () => {
        const { result } = renderHook(() => useModal());
        act(() => {
            result.current.openModal();
        });

        expect(result.current.isModalOpen).toBeTruthy();
    });
    test("The `closeModal` should correctly change `isModalOpen` state", () => {
        const { result } = renderHook(() => useModal());
        act(() => {
            result.current.closeModal();
        });

        expect(result.current.isModalOpen).toBeFalsy();
    });
});