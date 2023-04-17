/**
 * Main DTO object for creating response objects. All response DTOs should be extended from this class.
 * Should not be used directly.
 * @class
 */

class BaseResponseDTO {
    /**
     * Status of the response. Can be "SUCCESS" or "ERROR"
     * @type {"SUCCESS" | "ERROR"}
     * @public
     */
    status;

    constructor(status) {
        this.status = status;
    }
}

/**
 * DTO object with "SUCCESS" status and payload.
 * @class
 */
class SuccessResponseDTO extends BaseResponseDTO {
    /**
     * Payload which should be sent as result of successful request
     * @type {any}
     * @public
     */
    payload;

    constructor(payload) {
        super("SUCCESS");
        this.payload = payload
    }
}

/**
 * DTO object with "ERROR" status and error message.
 * @class
 */
class ErrorResponseDTO extends BaseResponseDTO {
    /**
     * Error message which should be sent as result of failed request
     * @type {String}
     * @public
     */
    message;

    constructor(message) {
        super("ERROR");
        this.message = message
    }
}

export {
    SuccessResponseDTO,
    ErrorResponseDTO,
}