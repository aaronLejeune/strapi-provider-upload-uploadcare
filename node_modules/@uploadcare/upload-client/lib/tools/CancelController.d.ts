declare class CancelController {
    private promise;
    private resolve;
    constructor();
    cancel(): void;
    onCancel(fn: () => void): void;
}
export default CancelController;
