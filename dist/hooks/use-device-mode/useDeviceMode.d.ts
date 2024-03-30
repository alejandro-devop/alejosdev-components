declare const useDeviceMode: () => {
    mode: "dark" | "light";
    toggleMode: () => void;
};
export default useDeviceMode;
