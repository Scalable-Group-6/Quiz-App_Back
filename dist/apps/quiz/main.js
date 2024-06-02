/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/quiz/src/dto/create-quiz.dto.ts":
/*!**********************************************!*\
  !*** ./apps/quiz/src/dto/create-quiz.dto.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateQuizDto = void 0;
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class QuestionDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], QuestionDto.prototype, "type", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], QuestionDto.prototype, "question", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], QuestionDto.prototype, "options", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], QuestionDto.prototype, "answer", void 0);
class CreateQuizDto {
}
exports.CreateQuizDto = CreateQuizDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateQuizDto.prototype, "subject", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateQuizDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateQuizDto.prototype, "duration", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateQuizDto.prototype, "creator_id", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], CreateQuizDto.prototype, "start_time", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], CreateQuizDto.prototype, "end_time", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => QuestionDto),
    __metadata("design:type", Array)
], CreateQuizDto.prototype, "questions", void 0);


/***/ }),

/***/ "./apps/quiz/src/dto/update-question.dto.ts":
/*!**************************************************!*\
  !*** ./apps/quiz/src/dto/update-question.dto.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateQuestionsDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
class QuestionDto {
}
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], QuestionDto.prototype, "type", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], QuestionDto.prototype, "question", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], QuestionDto.prototype, "options", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], QuestionDto.prototype, "answer", void 0);
class UpdateQuestionsDto {
}
exports.UpdateQuestionsDto = UpdateQuestionsDto;
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => QuestionDto),
    __metadata("design:type", Array)
], UpdateQuestionsDto.prototype, "questions", void 0);


/***/ }),

/***/ "./apps/quiz/src/dto/update-quiz.dto.ts":
/*!**********************************************!*\
  !*** ./apps/quiz/src/dto/update-quiz.dto.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateQuizDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
class QuestionDto {
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], QuestionDto.prototype, "type", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], QuestionDto.prototype, "question", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], QuestionDto.prototype, "options", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], QuestionDto.prototype, "answer", void 0);
class UpdateQuizDto {
}
exports.UpdateQuizDto = UpdateQuizDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateQuizDto.prototype, "subject", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateQuizDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UpdateQuizDto.prototype, "duration", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateQuizDto.prototype, "creator_id", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], UpdateQuizDto.prototype, "start_time", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], UpdateQuizDto.prototype, "end_time", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => QuestionDto),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], UpdateQuizDto.prototype, "questions", void 0);


/***/ }),

/***/ "./apps/quiz/src/quiz.controller.ts":
/*!******************************************!*\
  !*** ./apps/quiz/src/quiz.controller.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.QuizController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const quiz_service_1 = __webpack_require__(/*! ./quiz.service */ "./apps/quiz/src/quiz.service.ts");
const create_quiz_dto_1 = __webpack_require__(/*! ./dto/create-quiz.dto */ "./apps/quiz/src/dto/create-quiz.dto.ts");
const update_quiz_dto_1 = __webpack_require__(/*! ./dto/update-quiz.dto */ "./apps/quiz/src/dto/update-quiz.dto.ts");
const update_question_dto_1 = __webpack_require__(/*! ./dto/update-question.dto */ "./apps/quiz/src/dto/update-question.dto.ts");
const common_2 = __webpack_require__(/*! @app/common */ "./libs/common/src/index.ts");
const common_3 = __webpack_require__(/*! @app/common */ "./libs/common/src/index.ts");
let QuizController = class QuizController {
    constructor(quizService, rmqService) {
        this.quizService = quizService;
        this.rmqService = rmqService;
    }
    async createQuiz(request) {
        return this.quizService.createQuiz(request);
    }
    async getQuizById(id) {
        return this.quizService.getQuizById(id);
    }
    async getAllQuiz() {
        return this.quizService.showAll();
    }
    async deleteQuiz(id) {
        return this.quizService.delete(id);
    }
    async updateQuiz(id, updateQuizDto) {
        return this.quizService.updateQuiz(id, updateQuizDto);
    }
    async updateQuestions(id, updateQuestionsDto) {
        return this.quizService.updateQuestions(id, updateQuestionsDto);
    }
};
exports.QuizController = QuizController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(common_3.JwtAuthGuard),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof create_quiz_dto_1.CreateQuizDto !== "undefined" && create_quiz_dto_1.CreateQuizDto) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], QuizController.prototype, "createQuiz", null);
__decorate([
    (0, common_1.Get)(":id"),
    (0, common_1.UseGuards)(common_3.JwtAuthGuard),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], QuizController.prototype, "getQuizById", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(common_3.JwtAuthGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], QuizController.prototype, "getAllQuiz", null);
__decorate([
    (0, common_1.Delete)(":id"),
    (0, common_1.UseGuards)(common_3.JwtAuthGuard),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], QuizController.prototype, "deleteQuiz", null);
__decorate([
    (0, common_1.Patch)(":id"),
    (0, common_1.UseGuards)(common_3.JwtAuthGuard),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_d = typeof update_quiz_dto_1.UpdateQuizDto !== "undefined" && update_quiz_dto_1.UpdateQuizDto) === "function" ? _d : Object]),
    __metadata("design:returntype", Promise)
], QuizController.prototype, "updateQuiz", null);
__decorate([
    (0, common_1.Patch)(":id/questions"),
    (0, common_1.UseGuards)(common_3.JwtAuthGuard),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_e = typeof update_question_dto_1.UpdateQuestionsDto !== "undefined" && update_question_dto_1.UpdateQuestionsDto) === "function" ? _e : Object]),
    __metadata("design:returntype", Promise)
], QuizController.prototype, "updateQuestions", null);
exports.QuizController = QuizController = __decorate([
    (0, common_1.Controller)("quiz"),
    __metadata("design:paramtypes", [typeof (_a = typeof quiz_service_1.QuizService !== "undefined" && quiz_service_1.QuizService) === "function" ? _a : Object, typeof (_b = typeof common_2.RmqService !== "undefined" && common_2.RmqService) === "function" ? _b : Object])
], QuizController);


/***/ }),

/***/ "./apps/quiz/src/quiz.module.ts":
/*!**************************************!*\
  !*** ./apps/quiz/src/quiz.module.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.QuizModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const quiz_controller_1 = __webpack_require__(/*! ./quiz.controller */ "./apps/quiz/src/quiz.controller.ts");
const quiz_service_1 = __webpack_require__(/*! ./quiz.service */ "./apps/quiz/src/quiz.service.ts");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const Joi = __webpack_require__(/*! joi */ "joi");
const common_2 = __webpack_require__(/*! @app/common */ "./libs/common/src/index.ts");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const quiz_schema_1 = __webpack_require__(/*! ./schemas/quiz.schema */ "./apps/quiz/src/schemas/quiz.schema.ts");
const quiz_repository_1 = __webpack_require__(/*! ./quiz.repository */ "./apps/quiz/src/quiz.repository.ts");
let QuizModule = class QuizModule {
};
exports.QuizModule = QuizModule;
exports.QuizModule = QuizModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                validationSchema: Joi.object({
                    MONGODB_URI: Joi.string().required(),
                    PORT: Joi.number().required(),
                    RABBIT_MQ_URI: Joi.string().required(),
                    RABBIT_MQ_QUIZ_QUEUE: Joi.string().required(),
                }),
                envFilePath: './apps/quiz/.env',
            }),
            common_2.DatabaseModule,
            mongoose_1.MongooseModule.forFeature([{
                    name: quiz_schema_1.Quiz.name, schema: quiz_schema_1.QuizSchema
                }]),
            common_2.RmqModule,
            common_2.AuthModule
        ],
        controllers: [quiz_controller_1.QuizController,],
        providers: [quiz_service_1.QuizService, quiz_repository_1.QuizRepository],
    })
], QuizModule);


/***/ }),

/***/ "./apps/quiz/src/quiz.repository.ts":
/*!******************************************!*\
  !*** ./apps/quiz/src/quiz.repository.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var QuizRepository_1;
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.QuizRepository = void 0;
const common_1 = __webpack_require__(/*! @app/common */ "./libs/common/src/index.ts");
const common_2 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const quiz_schema_1 = __webpack_require__(/*! ./schemas/quiz.schema */ "./apps/quiz/src/schemas/quiz.schema.ts");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
let QuizRepository = QuizRepository_1 = class QuizRepository extends common_1.AbstractRepository {
    constructor(quizModel, connection) {
        super(quizModel, connection);
        this.logger = new common_2.Logger(QuizRepository_1.name);
    }
};
exports.QuizRepository = QuizRepository;
exports.QuizRepository = QuizRepository = QuizRepository_1 = __decorate([
    (0, common_2.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(quiz_schema_1.Quiz.name)),
    __param(1, (0, mongoose_1.InjectConnection)()),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object, typeof (_b = typeof mongoose_2.Connection !== "undefined" && mongoose_2.Connection) === "function" ? _b : Object])
], QuizRepository);


/***/ }),

/***/ "./apps/quiz/src/quiz.service.ts":
/*!***************************************!*\
  !*** ./apps/quiz/src/quiz.service.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var QuizService_1;
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.QuizService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const quiz_repository_1 = __webpack_require__(/*! ./quiz.repository */ "./apps/quiz/src/quiz.repository.ts");
const mongoose_1 = __webpack_require__(/*! mongoose */ "mongoose");
let QuizService = QuizService_1 = class QuizService {
    constructor(quizRepository) {
        this.quizRepository = quizRepository;
        this.logger = new common_1.Logger(QuizService_1.name);
    }
    async createQuiz(request) {
        return this.quizRepository.create(request);
    }
    async showAll() {
        return this.quizRepository.find({});
    }
    async getQuizById(id) {
        const quiz = await this.quizRepository.findOne({ _id: new mongoose_1.Types.ObjectId(id) });
        if (!quiz) {
            throw new common_1.NotFoundException(`Quiz with ID ${id} not found`);
        }
        return quiz;
    }
    async delete(id) {
        await this.quizRepository.deleteById(id);
        return { deleted: true };
    }
    async updateQuiz(id, updateQuizDto) {
        const filterQuery = { _id: new mongoose_1.Types.ObjectId(id) };
        const updateQuery = { $set: updateQuizDto };
        const quiz = await this.quizRepository.findOneAndUpdate(filterQuery, updateQuery);
        if (!quiz) {
            throw new common_1.NotFoundException(`Quiz with ID ${id} not found`);
        }
        return quiz;
    }
    async updateQuestions(id, updateQuestionsDto) {
        const filterQuery = { _id: new mongoose_1.Types.ObjectId(id) };
        const updateQuery = { $set: { questions: updateQuestionsDto.questions } };
        const quiz = await this.quizRepository.findOneAndUpdate(filterQuery, updateQuery);
        if (!quiz) {
            throw new common_1.NotFoundException(`Quiz with ID ${id} not found`);
        }
        return quiz;
    }
};
exports.QuizService = QuizService;
exports.QuizService = QuizService = QuizService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof quiz_repository_1.QuizRepository !== "undefined" && quiz_repository_1.QuizRepository) === "function" ? _a : Object])
], QuizService);


/***/ }),

/***/ "./apps/quiz/src/schemas/quiz.schema.ts":
/*!**********************************************!*\
  !*** ./apps/quiz/src/schemas/quiz.schema.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.QuizSchema = exports.Quiz = void 0;
const common_1 = __webpack_require__(/*! @app/common */ "./libs/common/src/index.ts");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
class Question {
}
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Question.prototype, "type", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Question.prototype, "question", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Array)
], Question.prototype, "options", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Question.prototype, "answer", void 0);
let Quiz = class Quiz extends common_1.AbstractDocument {
};
exports.Quiz = Quiz;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Quiz.prototype, "subject", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Quiz.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], Quiz.prototype, "duration", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Quiz.prototype, "creator_id", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], Quiz.prototype, "start_time", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], Quiz.prototype, "end_time", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [Question], required: true }),
    __metadata("design:type", Array)
], Quiz.prototype, "questions", void 0);
exports.Quiz = Quiz = __decorate([
    (0, mongoose_1.Schema)({ versionKey: false })
], Quiz);
exports.QuizSchema = mongoose_1.SchemaFactory.createForClass(Quiz);


/***/ }),

/***/ "./libs/common/src/auth/auth.module.ts":
/*!*********************************************!*\
  !*** ./libs/common/src/auth/auth.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const cookieParser = __webpack_require__(/*! cookie-parser */ "cookie-parser");
const services_1 = __webpack_require__(/*! ./services */ "./libs/common/src/auth/services.ts");
const rmq_module_1 = __webpack_require__(/*! ../rmq/rmq.module */ "./libs/common/src/rmq/rmq.module.ts");
let AuthModule = class AuthModule {
    configure(consumer) {
        consumer.apply(cookieParser()).forRoutes('*');
    }
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [rmq_module_1.RmqModule.register({ name: services_1.AUTH_SERVICE })],
        exports: [rmq_module_1.RmqModule],
    })
], AuthModule);


/***/ }),

/***/ "./libs/common/src/auth/jwt-auth.guard.ts":
/*!************************************************!*\
  !*** ./libs/common/src/auth/jwt-auth.guard.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtAuthGuard = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");
const services_1 = __webpack_require__(/*! ./services */ "./libs/common/src/auth/services.ts");
let JwtAuthGuard = class JwtAuthGuard {
    constructor(authClient) {
        this.authClient = authClient;
    }
    canActivate(context) {
        const authentication = this.getAuthentication(context);
        return this.authClient
            .send('validate_user', {
            Authentication: authentication,
        })
            .pipe((0, rxjs_1.tap)((res) => {
            this.addUser(res, context);
        }), (0, rxjs_1.catchError)(() => {
            throw new common_1.UnauthorizedException();
        }));
    }
    getAuthentication(context) {
        let authentication;
        if (context.getType() === 'rpc') {
            authentication = context.switchToRpc().getData().Authentication;
        }
        else if (context.getType() === 'http') {
            authentication = context.switchToHttp().getRequest()
                .cookies?.Authentication;
        }
        if (!authentication) {
            throw new common_1.UnauthorizedException('No value was provided for Authentication');
        }
        return authentication;
    }
    addUser(user, context) {
        if (context.getType() === 'rpc') {
            context.switchToRpc().getData().user = user;
        }
        else if (context.getType() === 'http') {
            context.switchToHttp().getRequest().user = user;
        }
    }
};
exports.JwtAuthGuard = JwtAuthGuard;
exports.JwtAuthGuard = JwtAuthGuard = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(services_1.AUTH_SERVICE)),
    __metadata("design:paramtypes", [typeof (_a = typeof microservices_1.ClientProxy !== "undefined" && microservices_1.ClientProxy) === "function" ? _a : Object])
], JwtAuthGuard);


/***/ }),

/***/ "./libs/common/src/auth/services.ts":
/*!******************************************!*\
  !*** ./libs/common/src/auth/services.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AUTH_SERVICE = void 0;
exports.AUTH_SERVICE = 'AUTH';


/***/ }),

/***/ "./libs/common/src/database/abstract.repository.ts":
/*!*********************************************************!*\
  !*** ./libs/common/src/database/abstract.repository.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AbstractRepository = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const mongoose_1 = __webpack_require__(/*! mongoose */ "mongoose");
class AbstractRepository {
    constructor(model, connection) {
        this.model = model;
        this.connection = connection;
    }
    async create(document, options) {
        const createdDocument = new this.model({
            ...document,
            _id: new mongoose_1.Types.ObjectId(),
        });
        return (await createdDocument.save(options)).toJSON();
    }
    async findOne(filterQuery) {
        const document = await this.model.findOne(filterQuery, {}, { lean: true });
        if (!document) {
            this.logger.warn('Document not found with filterQuery', filterQuery);
            throw new common_1.NotFoundException('Document not found.');
        }
        return document;
    }
    async findOneAndUpdate(filterQuery, update) {
        const document = await this.model.findOneAndUpdate(filterQuery, update, {
            lean: true,
            new: true,
        });
        if (!document) {
            this.logger.warn(`Document not found with filterQuery:`, filterQuery);
            throw new common_1.NotFoundException('Document not found.');
        }
        return document;
    }
    async upsert(filterQuery, document) {
        return this.model.findOneAndUpdate(filterQuery, document, {
            lean: true,
            upsert: true,
            new: true,
        });
    }
    async find(filterQuery) {
        return this.model.find(filterQuery, {}, { lean: true });
    }
    async deleteById(id) {
        const result = await this.model.deleteOne({ _id: id }).exec();
        if (result.deletedCount === 0) {
            this.logger.warn(`Document not found with id:`, id);
            throw new common_1.NotFoundException('Document not found.');
        }
        return true;
    }
    async deleteAll() {
        return this.model.deleteMany({}).exec();
    }
    async startTransaction() {
        const session = await this.connection.startSession();
        session.startTransaction();
        return session;
    }
}
exports.AbstractRepository = AbstractRepository;


/***/ }),

/***/ "./libs/common/src/database/abstract.schema.ts":
/*!*****************************************************!*\
  !*** ./libs/common/src/database/abstract.schema.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AbstractDocument = void 0;
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
let AbstractDocument = class AbstractDocument {
};
exports.AbstractDocument = AbstractDocument;
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.SchemaTypes.ObjectId }),
    __metadata("design:type", typeof (_a = typeof mongoose_2.Types !== "undefined" && mongoose_2.Types.ObjectId) === "function" ? _a : Object)
], AbstractDocument.prototype, "_id", void 0);
exports.AbstractDocument = AbstractDocument = __decorate([
    (0, mongoose_1.Schema)()
], AbstractDocument);


/***/ }),

/***/ "./libs/common/src/database/database.module.ts":
/*!*****************************************************!*\
  !*** ./libs/common/src/database/database.module.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DatabaseModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
let DatabaseModule = class DatabaseModule {
};
exports.DatabaseModule = DatabaseModule;
exports.DatabaseModule = DatabaseModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRootAsync({
                useFactory: (configService) => ({
                    uri: configService.get('MONGODB_URI'),
                }),
                inject: [config_1.ConfigService],
            }),
        ],
    })
], DatabaseModule);


/***/ }),

/***/ "./libs/common/src/index.ts":
/*!**********************************!*\
  !*** ./libs/common/src/index.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./database/database.module */ "./libs/common/src/database/database.module.ts"), exports);
__exportStar(__webpack_require__(/*! ./database/abstract.repository */ "./libs/common/src/database/abstract.repository.ts"), exports);
__exportStar(__webpack_require__(/*! ./database/abstract.schema */ "./libs/common/src/database/abstract.schema.ts"), exports);
__exportStar(__webpack_require__(/*! ./rmq/rmq.service */ "./libs/common/src/rmq/rmq.service.ts"), exports);
__exportStar(__webpack_require__(/*! ./rmq/rmq.module */ "./libs/common/src/rmq/rmq.module.ts"), exports);
__exportStar(__webpack_require__(/*! ./auth/auth.module */ "./libs/common/src/auth/auth.module.ts"), exports);
__exportStar(__webpack_require__(/*! ./auth/jwt-auth.guard */ "./libs/common/src/auth/jwt-auth.guard.ts"), exports);


/***/ }),

/***/ "./libs/common/src/rmq/rmq.module.ts":
/*!*******************************************!*\
  !*** ./libs/common/src/rmq/rmq.module.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var RmqModule_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RmqModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const rmq_service_1 = __webpack_require__(/*! ./rmq.service */ "./libs/common/src/rmq/rmq.service.ts");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
let RmqModule = RmqModule_1 = class RmqModule {
    static register({ name }) {
        return {
            module: RmqModule_1,
            imports: [
                microservices_1.ClientsModule.registerAsync([
                    {
                        name,
                        useFactory: (configService) => ({
                            transport: microservices_1.Transport.RMQ,
                            options: {
                                urls: [configService.get("RABBIT_MQ_URI")],
                                queue: configService.get(`RABBIT_MQ_${name}_QUEUE`),
                            },
                        }),
                        inject: [config_1.ConfigService],
                    },
                ]),
            ],
            exports: [microservices_1.ClientsModule],
        };
    }
};
exports.RmqModule = RmqModule;
exports.RmqModule = RmqModule = RmqModule_1 = __decorate([
    (0, common_1.Module)({
        providers: [rmq_service_1.RmqService],
        exports: [rmq_service_1.RmqService],
    })
], RmqModule);


/***/ }),

/***/ "./libs/common/src/rmq/rmq.service.ts":
/*!********************************************!*\
  !*** ./libs/common/src/rmq/rmq.service.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RmqService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
let RmqService = class RmqService {
    constructor(configService) {
        this.configService = configService;
    }
    getOptions(queue, noAck = false) {
        return {
            transport: microservices_1.Transport.RMQ,
            options: {
                urls: [this.configService.get("RABBIT_MQ_URI")],
                queue: this.configService.get(`RABBIT_MQ_${queue}_QUEUE`),
                noAck,
                persistent: true,
            },
        };
    }
    ack(context) {
        const channel = context.getChannelRef();
        const originalMessage = context.getMessage();
        channel.ack(originalMessage);
    }
};
exports.RmqService = RmqService;
exports.RmqService = RmqService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object])
], RmqService);


/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/config":
/*!*********************************!*\
  !*** external "@nestjs/config" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/microservices":
/*!****************************************!*\
  !*** external "@nestjs/microservices" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("@nestjs/microservices");

/***/ }),

/***/ "@nestjs/mongoose":
/*!***********************************!*\
  !*** external "@nestjs/mongoose" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@nestjs/mongoose");

/***/ }),

/***/ "class-transformer":
/*!************************************!*\
  !*** external "class-transformer" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("class-transformer");

/***/ }),

/***/ "class-validator":
/*!**********************************!*\
  !*** external "class-validator" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("cookie-parser");

/***/ }),

/***/ "joi":
/*!**********************!*\
  !*** external "joi" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("joi");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "rxjs":
/*!***********************!*\
  !*** external "rxjs" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("rxjs");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!*******************************!*\
  !*** ./apps/quiz/src/main.ts ***!
  \*******************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const quiz_module_1 = __webpack_require__(/*! ./quiz.module */ "./apps/quiz/src/quiz.module.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const common_2 = __webpack_require__(/*! @app/common */ "./libs/common/src/index.ts");
async function bootstrap() {
    const app = await core_1.NestFactory.create(quiz_module_1.QuizModule);
    const rmqService = app.get(common_2.RmqService);
    app.connectMicroservice(rmqService.getOptions('QUIZ', true));
    app.useGlobalPipes(new common_1.ValidationPipe());
    const configService = app.get(config_1.ConfigService);
    await app.startAllMicroservices();
    await app.listen(configService.get('PORT'));
}
bootstrap();

})();

/******/ })()
;