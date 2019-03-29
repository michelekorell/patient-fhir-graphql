"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
exports.patientSchema = apollo_server_1.gql `
# FHIR GraphQL Schema. Version 4.1.0
# FHIR GraphQL Schema. Version 4.1.0

# FHIR Defined Primitive types
scalar base64Binary # JSON Format: string
# Type boolean: use GraphQL scalar type Boolean
scalar canonical # JSON Format: string
scalar code # JSON Format: string
scalar date # JSON Format: string
scalar dateTime # JSON Format: string
scalar decimal # JSON Format: number
# Type id: use GraphQL scalar type ID
scalar instant # JSON Format: string
# Type integer: use GraphQL scalar type Int
scalar markdown # JSON Format: string
scalar oid # JSON Format: string
scalar positiveInt # JSON Format: number
# Type string: use GraphQL scalar type String
scalar time # JSON Format: string
scalar unsignedInt # JSON Format: number
scalar uri # JSON Format: string
scalar url # JSON Format: string
scalar uuid # JSON Format: string
scalar xhtml # JSON Format: string

# FHIR Defined Search Parameter Types
scalar number # JSON Format: String
# Search Param string: use GraphQL scalar type String
scalar token # JSON Format: String
scalar reference # JSON Format: String
scalar composite # JSON Format: String
scalar quantity # JSON Format: String
scalar special # JSON Format: String

type ElementBase {
  id: ID
  extension: [Extension]
}

type Address {
  id: String
  extension: [Extension]
  use: code  
  _use: ElementBase
  type: code  
  _type: ElementBase
  text: String  
  _text: ElementBase
  line: String  
  _line: [ElementBase]
  city: String  
  _city: ElementBase
  district: String  
  _district: ElementBase
  state: String  
  _state: ElementBase
  postalCode: String  
  _postalCode: ElementBase
  country: String
  _country: ElementBase
  period: Period
}

type Age {
  id: String
  extension: [Extension]
  value: decimal
  _value: ElementBase
  comparator: code
  _comparator: ElementBase
  unit: String
  _unit: ElementBase
  system: uri
  _system: ElementBase
  code: code
  _code: ElementBase
}

type Annotation {
  id: String
  extension: [Extension]
  authorReference: Reference
  authorString: String
  _authorString: ElementBase
  time: dateTime
  _time: ElementBase
  text: markdown
  _text: ElementBase
}

type Attachment {
  id: String
  extension: [Extension]
  contentType: code
  _contentType: ElementBase
  language: code
  _language: ElementBase
  data: base64Binary
  _data: ElementBase
  url: url
  _url: ElementBase
  size: unsignedInt
  _size: ElementBase
  hash: base64Binary
  _hash: ElementBase
  title: String
  _title: ElementBase
  creation: dateTime
  _creation: ElementBase
}

type CodeableConcept {
  id: String
  extension: [Extension]
  coding: [Coding]
  text: String
  _text: ElementBase
}

type Coding {
  id: String
  extension: [Extension]
  system: uri
  _system: ElementBase
  version: String
  _version: ElementBase
  code: code
  _code: ElementBase
  display: String
  _display: ElementBase
  userSelected: Boolean
  _userSelected: ElementBase
}

type ContactDetail {
  id: String
  extension: [Extension]
  name: String
  _name: ElementBase
  telecom: [ContactPoint]
}

type ContactPoint {
  id: String
  extension: [Extension]
  system: code
  _system: ElementBase
  value: String
  _value: ElementBase
  use: code
  _use: ElementBase
  rank: positiveInt
  _rank: ElementBase
  period: Period
}

type Contributor {
  id: String
  extension: [Extension]
  type: code
  _type: ElementBase
  name: String
  _name: ElementBase
  contact: [ContactDetail]
}

type Count {
  id: String
  extension: [Extension]
  value: decimal
  _value: ElementBase
  comparator: code
  _comparator: ElementBase
  unit: String
  _unit: ElementBase
  system: uri
  _system: ElementBase
  code: code
  _code: ElementBase
}

type DataRequirement {
  id: String
  extension: [Extension]
  type: code
  _type: ElementBase
  profile: canonical
  _profile: [ElementBase]
  subjectCodeableConcept: CodeableConcept
  subjectReference: Reference
  mustSupport: String
  _mustSupport: [ElementBase]
  codeFilter: [DataRequirementCodeFilter]
  dateFilter: [DataRequirementDateFilter]
  limit: positiveInt
  _limit: ElementBase
  sort: [DataRequirementSort]
}

type DataRequirementCodeFilter {
  id: String
  extension: [Extension]
  path: String
  _path: ElementBase
  searchParam: String
  _searchParam: ElementBase
  valueSet: canonical
  _valueSet: ElementBase
  code: [Coding]
}

type DataRequirementDateFilter {
  id: String
  extension: [Extension]
  path: String
  _path: ElementBase
  searchParam: String
  _searchParam: ElementBase
  valueDateTime: dateTime
  _valueDateTime: ElementBase
  valuePeriod: Period
  valueDuration: Duration
}

type DataRequirementSort {
  id: String
  extension: [Extension]
  path: String
  _path: ElementBase
  direction: code
  _direction: ElementBase
}

type Distance {
  id: String
  extension: [Extension]
  value: decimal 
 
  _value: ElementBase
  comparator: code 
  _comparator: ElementBase
  unit: String  
  _unit: ElementBase
  system: uri  
  _system: ElementBase
  code: code  
  _code: ElementBase
}

type Dosage {
  id: String
  extension: [Extension]
  modifierExtension: [Extension]
  sequence: Int
  _sequence: ElementBase
  text: String
  _text: ElementBase
  additionalInstruction: [CodeableConcept]
  patientInstruction: String
  _patientInstruction: ElementBase
  timing: Timing
  asNeededBoolean: Boolean
  _asNeededBoolean: ElementBase
  asNeededCodeableConcept: CodeableConcept
  site: CodeableConcept
  route: CodeableConcept
  method: CodeableConcept
  doseAndRate: [DosageDoseAndRate]
  maxDosePerPeriod: Ratio
  maxDosePerAdministration: Quantity
  maxDosePerLifetime: Quantity
}

type DosageDoseAndRate {
  id: String
  extension: [Extension]
  type: CodeableConcept
  doseRange: Range
  doseQuantity: Quantity
  rateRatio: Ratio
  rateRange: Range
  rateQuantity: Quantity
}

type Duration {
  id: String
  extension: [Extension]
  value: decimal
  _value: ElementBase
  comparator: code
  _comparator: ElementBase
  unit: String
  _unit: ElementBase
  system: uri
  _system: ElementBase
  code: code
  _code: ElementBase
}

type ElementDefinition {
  id: String
  extension: [Extension]
  modifierExtension: [Extension]
  path: String
  _path: ElementBase
  representation: code
  _representation: [ElementBase]
  sliceName: String
  _sliceName: ElementBase
  sliceIsConstraining: Boolean
  _sliceIsConstraining: ElementBase
  label: String
  _label: ElementBase
  code: [Coding]
  slicing: ElementDefinitionSlicing
  short: String
  _short: ElementBase
  definition: markdown
  _definition: ElementBase
  comment: markdown
  _comment: ElementBase
  requirements: markdown
  _requirements: ElementBase
  alias: String
  _alias: [ElementBase]
  min: unsignedInt
  _min: ElementBase
  max: String
  _max: ElementBase
  base: ElementDefinitionBase
  contentReference: uri
  _contentReference: ElementBase
  type: [ElementDefinitionType]
  defaultValueBase64Binary: base64Binary
  _defaultValueBase64Binary: ElementBase
  defaultValueBoolean: Boolean
  _defaultValueBoolean: ElementBase
  defaultValueCanonical: canonical
  _defaultValueCanonical: ElementBase
  defaultValueCode: code
  _defaultValueCode: ElementBase
  defaultValueDate: date
  _defaultValueDate: ElementBase
  defaultValueDateTime: dateTime
  _defaultValueDateTime: ElementBase
  defaultValueDecimal: decimal
  _defaultValueDecimal: ElementBase
  defaultValueId: ID
  _defaultValueId: ElementBase
  defaultValueInstant: instant
  _defaultValueInstant: ElementBase
  defaultValueInteger: Int
  _defaultValueInteger: ElementBase
  defaultValueMarkdown: markdown
  _defaultValueMarkdown: ElementBase
  defaultValueOid: oid
  _defaultValueOid: ElementBase
  defaultValuePositiveInt: positiveInt
  _defaultValuePositiveInt: ElementBase
  defaultValueString: String
  _defaultValueString: ElementBase
  defaultValueTime: time
  _defaultValueTime: ElementBase
  defaultValueUnsignedInt: unsignedInt
  _defaultValueUnsignedInt: ElementBase
  defaultValueUri: uri
  _defaultValueUri: ElementBase
  defaultValueUrl: url
  _defaultValueUrl: ElementBase
  defaultValueUuid: uuid
  _defaultValueUuid: ElementBase
  defaultValueAddress: Address
  defaultValueAge: Age
  defaultValueAnnotation: Annotation
  defaultValueAttachment: Attachment
  defaultValueCodeableConcept: CodeableConcept
  defaultValueCoding: Coding
  defaultValueContactPoint: ContactPoint
  defaultValueCount: Count
  defaultValueDistance: Distance
  defaultValueDuration: Duration
  defaultValueHumanName: HumanName
  defaultValueIdentifier: Identifier
  defaultValueMoney: Money
  defaultValuePeriod: Period
  defaultValueQuantity: Quantity
  defaultValueRange: Range
  defaultValueRatio: Ratio
  defaultValueSampledData: SampledData
  defaultValueSignature: Signature
  defaultValueTiming: Timing
  defaultValueContactDetail: ContactDetail
  defaultValueContributor: Contributor
  defaultValueDataRequirement: DataRequirement
  defaultValueExpression: Expression
  defaultValueParameterDefinition: ParameterDefinition
  defaultValueRelatedArtifact: RelatedArtifact
  defaultValueTriggerDefinition: TriggerDefinition
  defaultValueUsageContext: UsageContext
  defaultValueDosage: Dosage
  meaningWhenMissing: markdown
  _meaningWhenMissing: ElementBase
  orderMeaning: String
  _orderMeaning: ElementBase
  fixedBase64Binary: base64Binary
  _fixedBase64Binary: ElementBase
  fixedBoolean: Boolean
  _fixedBoolean: ElementBase
  fixedCanonical: canonical
  _fixedCanonical: ElementBase
  fixedCode: code
  _fixedCode: ElementBase
  fixedDate: date
  _fixedDate: ElementBase
  fixedDateTime: dateTime
  _fixedDateTime: ElementBase
  fixedDecimal: decimal
  _fixedDecimal: ElementBase
  fixedId: ID
  _fixedId: ElementBase
  fixedInstant: instant
  _fixedInstant: ElementBase
  fixedInteger: Int
  _fixedInteger: ElementBase
  fixedMarkdown: markdown
  _fixedMarkdown: ElementBase
  fixedOid: oid
  _fixedOid: ElementBase
  fixedPositiveInt: positiveInt
  _fixedPositiveInt: ElementBase
  fixedString: String
  _fixedString: ElementBase
  fixedTime: time
  _fixedTime: ElementBase
  fixedUnsignedInt: unsignedInt
  _fixedUnsignedInt: ElementBase
  fixedUri: uri
  _fixedUri: ElementBase
  fixedUrl: url
  _fixedUrl: ElementBase
  fixedUuid: uuid
  _fixedUuid: ElementBase
  fixedAddress: Address
  fixedAge: Age
  fixedAnnotation: Annotation
  fixedAttachment: Attachment
  fixedCodeableConcept: CodeableConcept
  fixedCoding: Coding
  fixedContactPoint: ContactPoint
  fixedCount: Count
  fixedDistance: Distance
  fixedDuration: Duration
  fixedHumanName: HumanName
  fixedIdentifier: Identifier
  fixedMoney: Money
  fixedPeriod: Period
  fixedQuantity: Quantity
  fixedRange: Range
  fixedRatio: Ratio
  fixedSampledData: SampledData
  fixedSignature: Signature
  fixedTiming: Timing
  fixedContactDetail: ContactDetail
  fixedContributor: Contributor
  fixedDataRequirement: DataRequirement
  fixedExpression: Expression
  fixedParameterDefinition: ParameterDefinition
  fixedRelatedArtifact: RelatedArtifact
  fixedTriggerDefinition: TriggerDefinition
  fixedUsageContext: UsageContext
  fixedDosage: Dosage
  patternBase64Binary: base64Binary
  _patternBase64Binary: ElementBase
  patternBoolean: Boolean
  _patternBoolean: ElementBase
  patternCanonical: canonical
  _patternCanonical: ElementBase
  patternCode: code
  _patternCode: ElementBase
  patternDate: date
  _patternDate: ElementBase
  patternDateTime: dateTime
  _patternDateTime: ElementBase
  patternDecimal: decimal
  _patternDecimal: ElementBase
  patternId: ID
  _patternId: ElementBase
  patternInstant: instant
  _patternInstant: ElementBase
  patternInteger: Int
  _patternInteger: ElementBase
  patternMarkdown: markdown
  _patternMarkdown: ElementBase
  patternOid: oid
  _patternOid: ElementBase
  patternPositiveInt: positiveInt
  _patternPositiveInt: ElementBase
  patternString: String
  _patternString: ElementBase
  patternTime: time
  _patternTime: ElementBase
  patternUnsignedInt: unsignedInt
  _patternUnsignedInt: ElementBase
  patternUri: uri
  _patternUri: ElementBase
  patternUrl: url
  _patternUrl: ElementBase
  patternUuid: uuid
  _patternUuid: ElementBase
  patternAddress: Address
  patternAge: Age
  patternAnnotation: Annotation
  patternAttachment: Attachment
  patternCodeableConcept: CodeableConcept
  patternCoding: Coding
  patternContactPoint: ContactPoint
  patternCount: Count
  patternDistance: Distance
  patternDuration: Duration
  patternHumanName: HumanName
  patternIdentifier: Identifier
  patternMoney: Money
  patternPeriod: Period
  patternQuantity: Quantity
  patternRange: Range
  patternRatio: Ratio
  patternSampledData: SampledData
  patternSignature: Signature
  patternTiming: Timing
  patternContactDetail: ContactDetail
  patternContributor: Contributor
  patternDataRequirement: DataRequirement
  patternExpression: Expression
  patternParameterDefinition: ParameterDefinition
  patternRelatedArtifact: RelatedArtifact
  patternTriggerDefinition: TriggerDefinition
  patternUsageContext: UsageContext
  patternDosage: Dosage
  example: [ElementDefinitionExample]
  minValueDate: date
  _minValueDate: ElementBase
  minValueDateTime: dateTime
  _minValueDateTime: ElementBase
  minValueInstant: instant
  _minValueInstant: ElementBase
  minValueTime: time
  _minValueTime: ElementBase
  minValueDecimal: decimal
  _minValueDecimal: ElementBase
  minValueInteger: Int
  _minValueInteger: ElementBase
  minValuePositiveInt: positiveInt
  _minValuePositiveInt: ElementBase
  minValueUnsignedInt: unsignedInt
  _minValueUnsignedInt: ElementBase
  minValueQuantity: Quantity
  maxValueDate: date
  _maxValueDate: ElementBase
  maxValueDateTime: dateTime
  _maxValueDateTime: ElementBase
  maxValueInstant: instant
  _maxValueInstant: ElementBase
  maxValueTime: time
  _maxValueTime: ElementBase
  maxValueDecimal: decimal
  _maxValueDecimal: ElementBase
  maxValueInteger: Int
  _maxValueInteger: ElementBase
  maxValuePositiveInt: positiveInt
  _maxValuePositiveInt: ElementBase
  maxValueUnsignedInt: unsignedInt
  _maxValueUnsignedInt: ElementBase
  maxValueQuantity: Quantity
  maxLength: Int
  _maxLength: ElementBase
  condition: ID
  _condition: [ElementBase]
  constraint: [ElementDefinitionConstraint]
  mustSupport: Boolean
  _mustSupport: ElementBase
  isModifier: Boolean
  _isModifier: ElementBase
  isModifierReason: String
  _isModifierReason: ElementBase
  isSummary: Boolean
  _isSummary: ElementBase
  binding: ElementDefinitionBinding
  mapping: [ElementDefinitionMapping]
}

type ElementDefinitionSlicing {
  id: String
  extension: [Extension]
  discriminator: [ElementDefinitionSlicingDiscriminator]
  description: String
  _description: ElementBase
  ordered: Boolean
  _ordered: ElementBase
  rules: code
  _rules: ElementBase
}

type ElementDefinitionSlicingDiscriminator {
  id: String
  extension: [Extension]
  type: code
  _type: ElementBase
  path: String
  _path: ElementBase
}

type ElementDefinitionBase {
  id: String
  extension: [Extension]
  path: String
  _path: ElementBase
  min: unsignedInt
  _min: ElementBase
  max: String
  _max: ElementBase
}

type ElementDefinitionType {
  id: String
  extension: [Extension]
  code: uri
  _code: ElementBase
  profile: canonical
  _profile: [ElementBase]
  targetProfile: canonical
  _targetProfile: [ElementBase]
  aggregation: code
  _aggregation: [ElementBase]
  versioning: code
  _versioning: ElementBase
}

type ElementDefinitionExample {
  id: String
  extension: [Extension]
  label: String
  _label: ElementBase
  valueBase64Binary: base64Binary
  _valueBase64Binary: ElementBase
  valueBoolean: Boolean
  _valueBoolean: ElementBase
  valueCanonical: canonical
  _valueCanonical: ElementBase
  valueCode: code
  _valueCode: ElementBase
  valueDate: date
  _valueDate: ElementBase
  valueDateTime: dateTime
  _valueDateTime: ElementBase
  valueDecimal: decimal
  _valueDecimal: ElementBase
  valueId: ID
  _valueId: ElementBase
  valueInstant: instant
  _valueInstant: ElementBase
  valueInteger: Int
  _valueInteger: ElementBase
  valueMarkdown: markdown
  _valueMarkdown: ElementBase
  valueOid: oid
  _valueOid: ElementBase
  valuePositiveInt: positiveInt
  _valuePositiveInt: ElementBase
  valueString: String
  _valueString: ElementBase
  valueTime: time
  _valueTime: ElementBase
  valueUnsignedInt: unsignedInt
  _valueUnsignedInt: ElementBase
  valueUri: uri
  _valueUri: ElementBase
  valueUrl: url
  _valueUrl: ElementBase
  valueUuid: uuid
  _valueUuid: ElementBase
  valueAddress: Address
  valueAge: Age
  valueAnnotation: Annotation
  valueAttachment: Attachment
  valueCodeableConcept: CodeableConcept
  valueCoding: Coding
  valueContactPoint: ContactPoint
  valueCount: Count
  valueDistance: Distance
  valueDuration: Duration
  valueHumanName: HumanName
  valueIdentifier: Identifier
  valueMoney: Money
  valuePeriod: Period
  valueQuantity: Quantity
  valueRange: Range
  valueRatio: Ratio
  valueSampledData: SampledData
  valueSignature: Signature
  valueTiming: Timing
  valueContactDetail: ContactDetail
  valueContributor: Contributor
  valueDataRequirement: DataRequirement
  valueExpression: Expression
  valueParameterDefinition: ParameterDefinition
  valueRelatedArtifact: RelatedArtifact
  valueTriggerDefinition: TriggerDefinition
  valueUsageContext: UsageContext
  valueDosage: Dosage
}

type ElementDefinitionConstraint {
  id: String
  extension: [Extension]
  key: ID
  _key: ElementBase
  requirements: String
  _requirements: ElementBase
  severity: code
  _severity: ElementBase
  human: String
  _human: ElementBase
  expression: String
  _expression: ElementBase
  xpath: String
  _xpath: ElementBase
  source: canonical
  _source: ElementBase
}

type ElementDefinitionBinding {
  id: String
  extension: [Extension]
  strength: code
  _strength: ElementBase
  description: String
  _description: ElementBase
  valueSet: canonical
  _valueSet: ElementBase
}

type ElementDefinitionMapping {
  id: String
  extension: [Extension]
  identity: ID
  _identity: ElementBase
  language: code
  _language: ElementBase
  map: String
  _map: ElementBase
  comment: String
  _comment: ElementBase
}

type Expression {
  id: String
  extension: [Extension]
  description: String
  _description: ElementBase
  name: ID
  _name: ElementBase
  language: code
  _language: ElementBase
  expression: String
  _expression: ElementBase
  reference: uri
  _reference: ElementBase
}

type Extension {
  id: String
  extension: [Extension]
  url: url!
  valueBase64Binary: base64Binary
  _valueBase64Binary: ElementBase
  valueBoolean: Boolean
  _valueBoolean: ElementBase
  valueCanonical: canonical
  _valueCanonical: ElementBase
  valueCode: code
  _valueCode: ElementBase
  valueDate: date
  _valueDate: ElementBase
  valueDateTime: dateTime
  _valueDateTime: ElementBase
  valueDecimal: decimal
  _valueDecimal: ElementBase
  valueId: ID
  _valueId: ElementBase
  valueInstant: instant
  _valueInstant: ElementBase
  valueInteger: Int
  _valueInteger: ElementBase
  valueMarkdown: markdown
  _valueMarkdown: ElementBase
  valueOid: oid
  _valueOid: ElementBase
  valuePositiveInt: positiveInt
  _valuePositiveInt: ElementBase
  valueString: String
  _valueString: ElementBase
  valueTime: time
  _valueTime: ElementBase
  valueUnsignedInt: unsignedInt
  _valueUnsignedInt: ElementBase
  valueUri: uri
  _valueUri: ElementBase
  valueUrl: url
  _valueUrl: ElementBase
  valueUuid: uuid
  _valueUuid: ElementBase
  valueAddress: Address
  valueAge: Age
  valueAnnotation: Annotation
  valueAttachment: Attachment
  valueCodeableConcept: CodeableConcept
  valueCoding: Coding
  valueContactPoint: ContactPoint
  valueCount: Count
  valueDistance: Distance
  valueDuration: Duration
  valueHumanName: HumanName
  valueIdentifier: Identifier
  valueMoney: Money
  valuePeriod: Period
  valueQuantity: Quantity
  valueRange: Range
  valueRatio: Ratio
  valueSampledData: SampledData
  valueSignature: Signature
  valueTiming: Timing
  valueContactDetail: ContactDetail
  valueContributor: Contributor
  valueDataRequirement: DataRequirement
  valueExpression: Expression
  valueParameterDefinition: ParameterDefinition
  valueRelatedArtifact: RelatedArtifact
  valueTriggerDefinition: TriggerDefinition
  valueUsageContext: UsageContext
  valueDosage: Dosage
}


type HumanName {
  id: String
  extension: [Extension]
  use: code  
  _use: ElementBase
  text: String  
  _text: ElementBase
  family: String  
  _family: ElementBase
  given: String 
  _given: [ElementBase]
  prefix: String  
  _prefix: [ElementBase]
  suffix: String  
  _suffix: [ElementBase]
  period: Period
}

type Identifier {
  id: String
  extension: [Extension]
  use: code  
  _use: ElementBase
  type: CodeableConcept
  system: uri  
  _system: ElementBase
  value: String  
  _value: ElementBase
  period: Period
  assigner: Reference
}

type MarketingStatus {
  id: String
  extension: [Extension]
  modifierExtension: [Extension]
  country: CodeableConcept!
  jurisdiction: CodeableConcept
  status: CodeableConcept!
  dateRange: Period!
  restoreDate: dateTime  
  _restoreDate: ElementBase
}

type Meta {
  id: String
  extension: [Extension]
  versionId: ID  
  _versionId: ElementBase
  lastUpdated: instant  
  _lastUpdated: ElementBase
  source: uri  
  _source: ElementBase
  profile: canonical  
  _profile: [ElementBase]
  security: [Coding]
  tag: [Coding]
}

type Money {
  id: String
  extension: [Extension]
  value: decimal  
  _value: ElementBase
  currency: code  
  _currency: ElementBase
}

type Narrative {
  id: String
  extension: [Extension]
  status: code  
  _status: ElementBase
  div: xhtml  
  _div: ElementBase
}

type ParameterDefinition {
  id: String
  extension: [Extension]
  name: code 
  _name: ElementBase
  use: code  
  _use: ElementBase
  min: Int  
  _min: ElementBase
  max: String  
  _max: ElementBase
  documentation: String  
  _documentation: ElementBase
  type: code  
  _type: ElementBase
  profile: canonical  
  _profile: ElementBase
}

type Period {
  id: String
  extension: [Extension]
  start: dateTime  
  _start: ElementBase
  end: dateTime  
  _end: ElementBase
}

type Population {
  id: String
  extension: [Extension]
  modifierExtension: [Extension]
  ageRange: Range
  ageCodeableConcept: CodeableConcept
  gender: CodeableConcept
  race: CodeableConcept
  physiologicalCondition: CodeableConcept
}

type ProdCharacteristic {
  id: String
  extension: [Extension]
  modifierExtension: [Extension]
  height: Quantity
  width: Quantity
  depth: Quantity
  weight: Quantity
  nominalVolume: Quantity
  externalDiameter: Quantity
  shape: String  
  _shape: ElementBase
  color: String
  _color: [ElementBase]
  imprint: String  
  _imprint: [ElementBase]
  image: [Attachment]
  scoring: CodeableConcept
}

type ProductShelfLife {
  id: String
  extension: [Extension]
  modifierExtension: [Extension]
  identifier: Identifier
  type: CodeableConcept!
  period: Quantity!
  specialPrecautionsForStorage: [CodeableConcept]
}

type Quantity {
  id: String
  extension: [Extension]
  value: decimal 
  _value: ElementBase
  comparator: code  
  _comparator: ElementBase
  unit: String  
  _unit: ElementBase
  system: uri  
  _system: ElementBase
  code: code  
  _code: ElementBase
}

type Range {
  id: String
  extension: [Extension]
  low: Quantity
  high: Quantity
}

type Ratio {
  id: String
  extension: [Extension]
  numerator: Quantity
  denominator: Quantity
}

type Reference {
  id: String
  extension: [Extension]
  reference: String  
  _reference: ElementBase
  type: uri  
  _type: ElementBase
  identifier: Identifier
  display: String  
  _display: ElementBase
}

type RelatedArtifact {
  id: String
  extension: [Extension]
  type: code  
  _type: ElementBase
  label: String  
  _label: ElementBase
  display: String  
  _display: ElementBase
  citation: markdown  
  _citation: ElementBase
  url: url  
  _url: ElementBase
  document: Attachment
  resource: canonical  
  _resource: ElementBase
}

type SampledData {
  id: String
  extension: [Extension]
  origin: Quantity!
  period: decimal  
  _period: ElementBase
  factor: decimal  
  _factor: ElementBase
  lowerLimit: decimal  
  _lowerLimit: ElementBase
  upperLimit: decimal  
  _upperLimit: ElementBase
  dimensions: positiveInt  
  _dimensions: ElementBase
  data: String  
  _data: ElementBase
}

type Signature {
  id: String
  extension: [Extension]
  type: [Coding]!
  when: instant  
  _when: ElementBase
  who: Reference!
  onBehalfOf: Reference
  targetFormat: code  
  _targetFormat: ElementBase
  sigFormat: code  
  _sigFormat: ElementBase
  data: base64Binary  
  _data: ElementBase
}

type SubstanceAmount {
  id: String
  extension: [Extension]
  modifierExtension: [Extension]
  amountQuantity: Quantity
  amountRange: Range
  amountString: String  
  _amountString: ElementBase
  amountType: CodeableConcept
  amountText: String  
  _amountText: ElementBase
  referenceRange: SubstanceAmountReferenceRange
}

type SubstanceAmountReferenceRange {
  id: String
  extension: [Extension]
  lowLimit: Quantity
  highLimit: Quantity
}

type Timing {
  id: String
  extension: [Extension]
  modifierExtension: [Extension]
  event: dateTime  
  _event: [ElementBase]
  repeat: TimingRepeat
  code: CodeableConcept
}

type TimingRepeat {
  id: String
  extension: [Extension]
  boundsDuration: Duration
  boundsRange: Range
  boundsPeriod: Period
  count: positiveInt  
  _count: ElementBase
  countMax: positiveInt  
  _countMax: ElementBase
  duration: decimal  
  _duration: ElementBase
  durationMax: decimal  
  _durationMax: ElementBase
  durationUnit: code  
  _durationUnit: ElementBase
  frequency: positiveInt  
  _frequency: ElementBase
  frequencyMax: positiveInt  
  _frequencyMax: ElementBase
  period: decimal  
  _period: ElementBase
  periodMax: decimal  
  _periodMax: ElementBase
  periodUnit: code  
  _periodUnit: ElementBase
  dayOfWeek: code  
  _dayOfWeek: [ElementBase]
  timeOfDay: time  
  _timeOfDay: [ElementBase]
  when: code  
  _when: [ElementBase]
  offset: unsignedInt  
  _offset: ElementBase
}

type TriggerDefinition {
  id: String
  extension: [Extension]
  type: code  
  _type: ElementBase
  name: String  
  _name: ElementBase
  timingTiming: Timing
  timingReference: Reference
  timingDate: date  
  _timingDate: ElementBase
  timingDateTime: dateTime  
  _timingDateTime: ElementBase
  data: [DataRequirement]
  condition: Expression
}

type UsageContext {
  id: String
  extension: [Extension]
  code: Coding!
  valueCodeableConcept: CodeableConcept
  valueQuantity: Quantity
  valueRange: Range
  valueReference: Reference
}

type Patient {
  id: ID
  meta: Meta
  implicitRules: uri  
  _implicitRules: ElementBase
  language: code  
  _language: ElementBase
  text: Narrative
  #contained: [Resource]
  extension: [Extension]
  modifierExtension: [Extension]
  identifier: [Identifier]
  active: Boolean  
  _active: ElementBase
  name: [HumanName]
  telecom: [ContactPoint]
  gender: code  
  _gender: ElementBase
  birthDate: date  
  _birthDate: ElementBase
  deceasedBoolean: Boolean  
  _deceasedBoolean: ElementBase
  deceasedDateTime: dateTime 
  _deceasedDateTime: ElementBase
  address: [Address]
  maritalStatus: CodeableConcept
  multipleBirthBoolean: Boolean 
  _multipleBirthBoolean: ElementBase
  multipleBirthInteger: Int  
  _multipleBirthInteger: ElementBase
  photo: [Attachment]
  contact: [PatientContact]
  communication: [PatientCommunication]
  generalPractitioner: [Reference]
  managingOrganization: Reference
  link: [PatientLink]
}

type PatientContact {
  id: String
  extension: [Extension]
  modifierExtension: [Extension]
  relationship: [CodeableConcept]
  name: HumanName
  telecom: [ContactPoint]
  address: Address
  gender: code  
  _gender: ElementBase
  organization: Reference
  period: Period
}

type PatientCommunication {
  id: String
  extension: [Extension]
  modifierExtension: [Extension]
  language: CodeableConcept!
  preferred: Boolean  
  _preferred: ElementBase
}

type PatientLink {
  id: String
  extension: [Extension]
  modifierExtension: [Extension]
  other: Reference!
  type: code
  _type: ElementBase
}

type PatientReadType {
  Patient(id: ID!): Patient
}

type PatientListType {
  PatientList(_filter: String
    active: [token]
    address: [String]
    address_city: [String]
    address_country: [String]
    address_postalcode: [String]
    address_state: [String]
    address_use: [token]
    birthdate: [date]
    death_date: [date]
    deceased: [token]
    email: [token]
    family: [String]
    gender: [token]
    general_practitioner: [reference]
    given: [String]
    identifier: [token]
    language: [token]
    link: [reference]
    name: [String]
    organization: [reference]
    phone: [token]
    phonetic: [String]
    telecom: [token]
    _text: [String]
    _content: [String]
    _id: [token]
    _lastUpdated: [date]
    _profile: [reference]
    _query: [token]
    _security: [token]
    _source: [uri]
    _tag: [token]
    _sort: String
    _count: Int
    _cursor: String): [Patient]
}

type PatientConnectionType {
  PatientConection(_filter: String
    active: [token]
    address: [String]
    address_city: [String]
    address_country: [String]
    address_postalcode: [String]
    address_state: [String]
    address_use: [token]
    birthdate: [date]
    death_date: [date]
    deceased: [token]
    email: [token]
    family: [String]
    gender: [token]
    general_practitioner: [reference]
    given: [String]
    identifier: [token]
    language: [token]
    link: [reference]
    name: [String]
    organization: [reference]
    phone: [token]
    phonetic: [String]
    telecom: [token]
    _text: [String]
    _content: [String]
    _id: [token]
    _lastUpdated: [date]
    _profile: [reference]
    _query: [token]
    _security: [token]
    _source: [uri]
    _tag: [token]
    _sort: String
    _count: Int
    _cursor: String): PatientConnection
}

type PatientConnection {
  count: Int
  offset: Int
  pagesize: Int
  first: ID
  previous: ID
  next: ID
  last: ID
  edges: [PatientEdge]
}

type PatientEdge {
  mode: String
  score: Float
  resource: Patient
}

type PatientCreation {
  location: String
  resource: Patient
  information: OperationOutcome
}

type PatientUpdate {
  resource: Patient
  information: OperationOutcome
}

type PatientDeleteType {
  PatientDelete(id: ID): PatientDelete
}

type PatientDelete {
  information: OperationOutcome
}

type OperationOutcome {
  id: ID
  meta: Meta
  implicitRules: uri  _implicitRules: ElementBase
  language: code  _language: ElementBase
  text: Narrative
  #contained: [Resource]
  extension: [Extension]
  modifierExtension: [Extension]
  issue: [OperationOutcomeIssue]!
}

type OperationOutcomeIssue {
  id: String
  extension: [Extension]
  modifierExtension: [Extension]
  severity: code  _severity: ElementBase
  code: code  _code: ElementBase
  details: CodeableConcept
  diagnostics: String  _diagnostics: ElementBase
  location: String  _location: [ElementBase]
  expression: String  _expression: [ElementBase]
}

type Query {
    Patient(id: ID!): Patient
}
`;
//# sourceMappingURL=patient.js.map