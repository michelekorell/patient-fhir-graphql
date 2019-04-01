import {gql} from 'apollo-server';

export const patientSchema = gql`

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
#scalar date # JSON Format: String
# Search Param string: use GraphQL scalar type String
scalar token # JSON Format: String
scalar reference # JSON Format: String
scalar composite # JSON Format: String
scalar quantity # JSON Format: String
#scalar uri # JSON Format: String
scalar special # JSON Format: String

type ElementBase {
  id: ID
  extension: [Extension]
}

input ElementBaseInput {
  id: ID
  extension: [ExtensionInput]
}

type Address {
  id: String
  extension: [Extension]
  use: code  _use: ElementBase
  type: code  _type: ElementBase
  text: String  _text: ElementBase
  line: String  _line: [ElementBase]
  city: String  _city: ElementBase
  district: String  _district: ElementBase
  state: String  _state: ElementBase
  postalCode: String  _postalCode: ElementBase
  country: String  _country: ElementBase
  period: Period
}

input AddressInput {
  id: String
  extension: [ExtensionInput]
  use: code  _use: ElementBaseInput
  type: code  _type: ElementBaseInput
  text: String  _text: ElementBaseInput
  line: String  _line: [ElementBaseInput]
  city: String  _city: ElementBaseInput
  district: String  _district: ElementBaseInput
  state: String  _state: ElementBaseInput
  postalCode: String  _postalCode: ElementBaseInput
  country: String  _country: ElementBaseInput
  period: PeriodInput
}

type Age {
  id: String
  extension: [Extension]
  value: decimal  _value: ElementBase
  comparator: code  _comparator: ElementBase
  unit: String  _unit: ElementBase
  system: uri  _system: ElementBase
  code: code  _code: ElementBase
}

input AgeInput {
  id: String
  extension: [ExtensionInput]
  value: decimal  _value: ElementBaseInput
  comparator: code  _comparator: ElementBaseInput
  unit: String  _unit: ElementBaseInput
  system: uri  _system: ElementBaseInput
  code: code  _code: ElementBaseInput
}

type Annotation {
  id: String
  extension: [Extension]
  authorReference: Reference
  authorString: String  _authorString: ElementBase
  time: dateTime  _time: ElementBase
  text: markdown  _text: ElementBase
}

input AnnotationInput {
  id: String
  extension: [ExtensionInput]
  authorReference: ReferenceInput
  authorString: String  _authorString: ElementBaseInput
  time: dateTime  _time: ElementBaseInput
  text: markdown  _text: ElementBaseInput
}

type Attachment {
  id: String
  extension: [Extension]
  contentType: code  _contentType: ElementBase
  language: code  _language: ElementBase
  data: base64Binary  _data: ElementBase
  url: url  _url: ElementBase
  size: unsignedInt  _size: ElementBase
  hash: base64Binary  _hash: ElementBase
  title: String  _title: ElementBase
  creation: dateTime  _creation: ElementBase
}

input AttachmentInput {
  id: String
  extension: [ExtensionInput]
  contentType: code  _contentType: ElementBaseInput
  language: code  _language: ElementBaseInput
  data: base64Binary  _data: ElementBaseInput
  url: url  _url: ElementBaseInput
  size: unsignedInt  _size: ElementBaseInput
  hash: base64Binary  _hash: ElementBaseInput
  title: String  _title: ElementBaseInput
  creation: dateTime  _creation: ElementBaseInput
}

type CodeableConcept {
  id: String
  extension: [Extension]
  coding: [Coding]
  text: String  _text: ElementBase
}

input CodeableConceptInput {
  id: String
  extension: [ExtensionInput]
  coding: [CodingInput]
  text: String  _text: ElementBaseInput
}

type Coding {
  id: String
  extension: [Extension]
  system: uri  _system: ElementBase
  version: String  _version: ElementBase
  code: code  _code: ElementBase
  display: String  _display: ElementBase
  userSelected: Boolean  _userSelected: ElementBase
}

input CodingInput {
  id: String
  extension: [ExtensionInput]
  system: uri  _system: ElementBaseInput
  version: String  _version: ElementBaseInput
  code: code  _code: ElementBaseInput
  display: String  _display: ElementBaseInput
  userSelected: Boolean  _userSelected: ElementBaseInput
}

type ContactDetail {
  id: String
  extension: [Extension]
  name: String  _name: ElementBase
  telecom: [ContactPoint]
}

input ContactDetailInput {
  id: String
  extension: [ExtensionInput]
  name: String  _name: ElementBaseInput
  telecom: [ContactPointInput]
}

type ContactPoint {
  id: String
  extension: [Extension]
  system: code  _system: ElementBase
  value: String  _value: ElementBase
  use: code  _use: ElementBase
  rank: positiveInt  _rank: ElementBase
  period: Period
}

input ContactPointInput {
  id: String
  extension: [ExtensionInput]
  system: code  _system: ElementBaseInput
  value: String  _value: ElementBaseInput
  use: code  _use: ElementBaseInput
  rank: positiveInt  _rank: ElementBaseInput
  period: PeriodInput
}

type Contributor {
  id: String
  extension: [Extension]
  type: code  _type: ElementBase
  name: String  _name: ElementBase
  contact: [ContactDetail]
}

input ContributorInput {
  id: String
  extension: [ExtensionInput]
  type: code  _type: ElementBaseInput
  name: String  _name: ElementBaseInput
  contact: [ContactDetailInput]
}

type Count {
  id: String
  extension: [Extension]
  value: decimal  _value: ElementBase
  comparator: code  _comparator: ElementBase
  unit: String  _unit: ElementBase
  system: uri  _system: ElementBase
  code: code  _code: ElementBase
}

input CountInput {
  id: String
  extension: [ExtensionInput]
  value: decimal  _value: ElementBaseInput
  comparator: code  _comparator: ElementBaseInput
  unit: String  _unit: ElementBaseInput
  system: uri  _system: ElementBaseInput
  code: code  _code: ElementBaseInput
}

type DataRequirement {
  id: String
  extension: [Extension]
  type: code  _type: ElementBase
  profile: canonical  _profile: [ElementBase]
  subjectCodeableConcept: CodeableConcept
  subjectReference: Reference
  mustSupport: String  _mustSupport: [ElementBase]
  codeFilter: [DataRequirementCodeFilter]
  dateFilter: [DataRequirementDateFilter]
  limit: positiveInt  _limit: ElementBase
  sort: [DataRequirementSort]
}

type DataRequirementCodeFilter {
  id: String
  extension: [Extension]
  path: String  _path: ElementBase
  searchParam: String  _searchParam: ElementBase
  valueSet: canonical  _valueSet: ElementBase
  code: [Coding]
}

type DataRequirementDateFilter {
  id: String
  extension: [Extension]
  path: String  _path: ElementBase
  searchParam: String  _searchParam: ElementBase
  valueDateTime: dateTime  _valueDateTime: ElementBase
  valuePeriod: Period
  valueDuration: Duration
}

type DataRequirementSort {
  id: String
  extension: [Extension]
  path: String  _path: ElementBase
  direction: code  _direction: ElementBase
}

input DataRequirementInput {
  id: String
  extension: [ExtensionInput]
  type: code  _type: ElementBaseInput
  profile: canonical  _profile: [ElementBaseInput]
  subjectCodeableConcept: CodeableConceptInput
  subjectReference: ReferenceInput
  mustSupport: String  _mustSupport: [ElementBaseInput]
  codeFilter: [DataRequirementCodeFilterInput]
  dateFilter: [DataRequirementDateFilterInput]
  limit: positiveInt  _limit: ElementBaseInput
  sort: [DataRequirementSortInput]
}

input DataRequirementCodeFilterInput {
  id: String
  extension: [ExtensionInput]
  path: String  _path: ElementBaseInput
  searchParam: String  _searchParam: ElementBaseInput
  valueSet: canonical  _valueSet: ElementBaseInput
  code: [CodingInput]
}

input DataRequirementDateFilterInput {
  id: String
  extension: [ExtensionInput]
  path: String  _path: ElementBaseInput
  searchParam: String  _searchParam: ElementBaseInput
  valueDateTime: dateTime  _valueDateTime: ElementBaseInput
  valuePeriod: PeriodInput
  valueDuration: DurationInput
}

input DataRequirementSortInput {
  id: String
  extension: [ExtensionInput]
  path: String  _path: ElementBaseInput
  direction: code  _direction: ElementBaseInput
}

type Distance {
  id: String
  extension: [Extension]
  value: decimal  _value: ElementBase
  comparator: code  _comparator: ElementBase
  unit: String  _unit: ElementBase
  system: uri  _system: ElementBase
  code: code  _code: ElementBase
}

input DistanceInput {
  id: String
  extension: [ExtensionInput]
  value: decimal  _value: ElementBaseInput
  comparator: code  _comparator: ElementBaseInput
  unit: String  _unit: ElementBaseInput
  system: uri  _system: ElementBaseInput
  code: code  _code: ElementBaseInput
}

type Dosage {
  id: String
  extension: [Extension]
  modifierExtension: [Extension]
  sequence: Int  _sequence: ElementBase
  text: String  _text: ElementBase
  additionalInstruction: [CodeableConcept]
  patientInstruction: String  _patientInstruction: ElementBase
  timing: Timing
  asNeededBoolean: Boolean  _asNeededBoolean: ElementBase
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

input DosageInput {
  id: String
  extension: [ExtensionInput]
  modifierExtension: [ExtensionInput]
  sequence: Int  _sequence: ElementBaseInput
  text: String  _text: ElementBaseInput
  additionalInstruction: [CodeableConceptInput]
  patientInstruction: String  _patientInstruction: ElementBaseInput
  timing: TimingInput
  asNeededBoolean: Boolean  _asNeededBoolean: ElementBaseInput
  asNeededCodeableConcept: CodeableConceptInput
  site: CodeableConceptInput
  route: CodeableConceptInput
  method: CodeableConceptInput
  doseAndRate: [DosageDoseAndRateInput]
  maxDosePerPeriod: RatioInput
  maxDosePerAdministration: QuantityInput
  maxDosePerLifetime: QuantityInput
}

input DosageDoseAndRateInput {
  id: String
  extension: [ExtensionInput]
  type: CodeableConceptInput
  doseRange: RangeInput
  doseQuantity: QuantityInput
  rateRatio: RatioInput
  rateRange: RangeInput
  rateQuantity: QuantityInput
}

type Duration {
  id: String
  extension: [Extension]
  value: decimal  _value: ElementBase
  comparator: code  _comparator: ElementBase
  unit: String  _unit: ElementBase
  system: uri  _system: ElementBase
  code: code  _code: ElementBase
}

input DurationInput {
  id: String
  extension: [ExtensionInput]
  value: decimal  _value: ElementBaseInput
  comparator: code  _comparator: ElementBaseInput
  unit: String  _unit: ElementBaseInput
  system: uri  _system: ElementBaseInput
  code: code  _code: ElementBaseInput
}

type ElementDefinition {
  id: String
  extension: [Extension]
  modifierExtension: [Extension]
  path: String  _path: ElementBase
  representation: code  _representation: [ElementBase]
  sliceName: String  _sliceName: ElementBase
  sliceIsConstraining: Boolean  _sliceIsConstraining: ElementBase
  label: String  _label: ElementBase
  code: [Coding]
  slicing: ElementDefinitionSlicing
  short: String  _short: ElementBase
  definition: markdown  _definition: ElementBase
  comment: markdown  _comment: ElementBase
  requirements: markdown  _requirements: ElementBase
  alias: String  _alias: [ElementBase]
  min: unsignedInt  _min: ElementBase
  max: String  _max: ElementBase
  base: ElementDefinitionBase
  contentReference: uri  _contentReference: ElementBase
  type: [ElementDefinitionType]
  defaultValueBase64Binary: base64Binary  _defaultValueBase64Binary: ElementBase
  defaultValueBoolean: Boolean  _defaultValueBoolean: ElementBase
  defaultValueCanonical: canonical  _defaultValueCanonical: ElementBase
  defaultValueCode: code  _defaultValueCode: ElementBase
  defaultValueDate: date  _defaultValueDate: ElementBase
  defaultValueDateTime: dateTime  _defaultValueDateTime: ElementBase
  defaultValueDecimal: decimal  _defaultValueDecimal: ElementBase
  defaultValueId: ID  _defaultValueId: ElementBase
  defaultValueInstant: instant  _defaultValueInstant: ElementBase
  defaultValueInteger: Int  _defaultValueInteger: ElementBase
  defaultValueMarkdown: markdown  _defaultValueMarkdown: ElementBase
  defaultValueOid: oid  _defaultValueOid: ElementBase
  defaultValuePositiveInt: positiveInt  _defaultValuePositiveInt: ElementBase
  defaultValueString: String  _defaultValueString: ElementBase
  defaultValueTime: time  _defaultValueTime: ElementBase
  defaultValueUnsignedInt: unsignedInt  _defaultValueUnsignedInt: ElementBase
  defaultValueUri: uri  _defaultValueUri: ElementBase
  defaultValueUrl: url  _defaultValueUrl: ElementBase
  defaultValueUuid: uuid  _defaultValueUuid: ElementBase
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
  meaningWhenMissing: markdown  _meaningWhenMissing: ElementBase
  orderMeaning: String  _orderMeaning: ElementBase
  fixedBase64Binary: base64Binary  _fixedBase64Binary: ElementBase
  fixedBoolean: Boolean  _fixedBoolean: ElementBase
  fixedCanonical: canonical  _fixedCanonical: ElementBase
  fixedCode: code  _fixedCode: ElementBase
  fixedDate: date  _fixedDate: ElementBase
  fixedDateTime: dateTime  _fixedDateTime: ElementBase
  fixedDecimal: decimal  _fixedDecimal: ElementBase
  fixedId: ID  _fixedId: ElementBase
  fixedInstant: instant  _fixedInstant: ElementBase
  fixedInteger: Int  _fixedInteger: ElementBase
  fixedMarkdown: markdown  _fixedMarkdown: ElementBase
  fixedOid: oid  _fixedOid: ElementBase
  fixedPositiveInt: positiveInt  _fixedPositiveInt: ElementBase
  fixedString: String  _fixedString: ElementBase
  fixedTime: time  _fixedTime: ElementBase
  fixedUnsignedInt: unsignedInt  _fixedUnsignedInt: ElementBase
  fixedUri: uri  _fixedUri: ElementBase
  fixedUrl: url  _fixedUrl: ElementBase
  fixedUuid: uuid  _fixedUuid: ElementBase
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
  patternBase64Binary: base64Binary  _patternBase64Binary: ElementBase
  patternBoolean: Boolean  _patternBoolean: ElementBase
  patternCanonical: canonical  _patternCanonical: ElementBase
  patternCode: code  _patternCode: ElementBase
  patternDate: date  _patternDate: ElementBase
  patternDateTime: dateTime  _patternDateTime: ElementBase
  patternDecimal: decimal  _patternDecimal: ElementBase
  patternId: ID  _patternId: ElementBase
  patternInstant: instant  _patternInstant: ElementBase
  patternInteger: Int  _patternInteger: ElementBase
  patternMarkdown: markdown  _patternMarkdown: ElementBase
  patternOid: oid  _patternOid: ElementBase
  patternPositiveInt: positiveInt  _patternPositiveInt: ElementBase
  patternString: String  _patternString: ElementBase
  patternTime: time  _patternTime: ElementBase
  patternUnsignedInt: unsignedInt  _patternUnsignedInt: ElementBase
  patternUri: uri  _patternUri: ElementBase
  patternUrl: url  _patternUrl: ElementBase
  patternUuid: uuid  _patternUuid: ElementBase
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
  minValueDate: date  _minValueDate: ElementBase
  minValueDateTime: dateTime  _minValueDateTime: ElementBase
  minValueInstant: instant  _minValueInstant: ElementBase
  minValueTime: time  _minValueTime: ElementBase
  minValueDecimal: decimal  _minValueDecimal: ElementBase
  minValueInteger: Int  _minValueInteger: ElementBase
  minValuePositiveInt: positiveInt  _minValuePositiveInt: ElementBase
  minValueUnsignedInt: unsignedInt  _minValueUnsignedInt: ElementBase
  minValueQuantity: Quantity
  maxValueDate: date  _maxValueDate: ElementBase
  maxValueDateTime: dateTime  _maxValueDateTime: ElementBase
  maxValueInstant: instant  _maxValueInstant: ElementBase
  maxValueTime: time  _maxValueTime: ElementBase
  maxValueDecimal: decimal  _maxValueDecimal: ElementBase
  maxValueInteger: Int  _maxValueInteger: ElementBase
  maxValuePositiveInt: positiveInt  _maxValuePositiveInt: ElementBase
  maxValueUnsignedInt: unsignedInt  _maxValueUnsignedInt: ElementBase
  maxValueQuantity: Quantity
  maxLength: Int  _maxLength: ElementBase
  condition: ID  _condition: [ElementBase]
  constraint: [ElementDefinitionConstraint]
  mustSupport: Boolean  _mustSupport: ElementBase
  isModifier: Boolean  _isModifier: ElementBase
  isModifierReason: String  _isModifierReason: ElementBase
  isSummary: Boolean  _isSummary: ElementBase
  binding: ElementDefinitionBinding
  mapping: [ElementDefinitionMapping]
}

type ElementDefinitionSlicing {
  id: String
  extension: [Extension]
  discriminator: [ElementDefinitionSlicingDiscriminator]
  description: String  _description: ElementBase
  ordered: Boolean  _ordered: ElementBase
  rules: code  _rules: ElementBase
}

type ElementDefinitionSlicingDiscriminator {
  id: String
  extension: [Extension]
  type: code  _type: ElementBase
  path: String  _path: ElementBase
}

type ElementDefinitionBase {
  id: String
  extension: [Extension]
  path: String  _path: ElementBase
  min: unsignedInt  _min: ElementBase
  max: String  _max: ElementBase
}

type ElementDefinitionType {
  id: String
  extension: [Extension]
  code: uri  _code: ElementBase
  profile: canonical  _profile: [ElementBase]
  targetProfile: canonical  _targetProfile: [ElementBase]
  aggregation: code  _aggregation: [ElementBase]
  versioning: code  _versioning: ElementBase
}

type ElementDefinitionExample {
  id: String
  extension: [Extension]
  label: String  _label: ElementBase
  valueBase64Binary: base64Binary  _valueBase64Binary: ElementBase
  valueBoolean: Boolean  _valueBoolean: ElementBase
  valueCanonical: canonical  _valueCanonical: ElementBase
  valueCode: code  _valueCode: ElementBase
  valueDate: date  _valueDate: ElementBase
  valueDateTime: dateTime  _valueDateTime: ElementBase
  valueDecimal: decimal  _valueDecimal: ElementBase
  valueId: ID  _valueId: ElementBase
  valueInstant: instant  _valueInstant: ElementBase
  valueInteger: Int  _valueInteger: ElementBase
  valueMarkdown: markdown  _valueMarkdown: ElementBase
  valueOid: oid  _valueOid: ElementBase
  valuePositiveInt: positiveInt  _valuePositiveInt: ElementBase
  valueString: String  _valueString: ElementBase
  valueTime: time  _valueTime: ElementBase
  valueUnsignedInt: unsignedInt  _valueUnsignedInt: ElementBase
  valueUri: uri  _valueUri: ElementBase
  valueUrl: url  _valueUrl: ElementBase
  valueUuid: uuid  _valueUuid: ElementBase
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
  key: ID  _key: ElementBase
  requirements: String  _requirements: ElementBase
  severity: code  _severity: ElementBase
  human: String  _human: ElementBase
  expression: String  _expression: ElementBase
  xpath: String  _xpath: ElementBase
  source: canonical  _source: ElementBase
}

type ElementDefinitionBinding {
  id: String
  extension: [Extension]
  strength: code  _strength: ElementBase
  description: String  _description: ElementBase
  valueSet: canonical  _valueSet: ElementBase
}

type ElementDefinitionMapping {
  id: String
  extension: [Extension]
  identity: ID  _identity: ElementBase
  language: code  _language: ElementBase
  map: String  _map: ElementBase
  comment: String  _comment: ElementBase
}

input ElementDefinitionInput {
  id: String
  extension: [ExtensionInput]
  modifierExtension: [ExtensionInput]
  path: String  _path: ElementBaseInput
  representation: code  _representation: [ElementBaseInput]
  sliceName: String  _sliceName: ElementBaseInput
  sliceIsConstraining: Boolean  _sliceIsConstraining: ElementBaseInput
  label: String  _label: ElementBaseInput
  code: [CodingInput]
  slicing: ElementDefinitionSlicingInput
  short: String  _short: ElementBaseInput
  definition: markdown  _definition: ElementBaseInput
  comment: markdown  _comment: ElementBaseInput
  requirements: markdown  _requirements: ElementBaseInput
  alias: String  _alias: [ElementBaseInput]
  min: unsignedInt  _min: ElementBaseInput
  max: String  _max: ElementBaseInput
  base: ElementDefinitionBaseInput
  contentReference: uri  _contentReference: ElementBaseInput
  type: [ElementDefinitionTypeInput]
  defaultValueBase64Binary: base64Binary  _defaultValueBase64Binary: ElementBaseInput
  defaultValueBoolean: Boolean  _defaultValueBoolean: ElementBaseInput
  defaultValueCanonical: canonical  _defaultValueCanonical: ElementBaseInput
  defaultValueCode: code  _defaultValueCode: ElementBaseInput
  defaultValueDate: date  _defaultValueDate: ElementBaseInput
  defaultValueDateTime: dateTime  _defaultValueDateTime: ElementBaseInput
  defaultValueDecimal: decimal  _defaultValueDecimal: ElementBaseInput
  defaultValueId: ID  _defaultValueId: ElementBaseInput
  defaultValueInstant: instant  _defaultValueInstant: ElementBaseInput
  defaultValueInteger: Int  _defaultValueInteger: ElementBaseInput
  defaultValueMarkdown: markdown  _defaultValueMarkdown: ElementBaseInput
  defaultValueOid: oid  _defaultValueOid: ElementBaseInput
  defaultValuePositiveInt: positiveInt  _defaultValuePositiveInt: ElementBaseInput
  defaultValueString: String  _defaultValueString: ElementBaseInput
  defaultValueTime: time  _defaultValueTime: ElementBaseInput
  defaultValueUnsignedInt: unsignedInt  _defaultValueUnsignedInt: ElementBaseInput
  defaultValueUri: uri  _defaultValueUri: ElementBaseInput
  defaultValueUrl: url  _defaultValueUrl: ElementBaseInput
  defaultValueUuid: uuid  _defaultValueUuid: ElementBaseInput
  defaultValueAddress: AddressInput
  defaultValueAge: AgeInput
  defaultValueAnnotation: AnnotationInput
  defaultValueAttachment: AttachmentInput
  defaultValueCodeableConcept: CodeableConceptInput
  defaultValueCoding: CodingInput
  defaultValueContactPoint: ContactPointInput
  defaultValueCount: CountInput
  defaultValueDistance: DistanceInput
  defaultValueDuration: DurationInput
  defaultValueHumanName: HumanNameInput
  defaultValueIdentifier: IdentifierInput
  defaultValueMoney: MoneyInput
  defaultValuePeriod: PeriodInput
  defaultValueQuantity: QuantityInput
  defaultValueRange: RangeInput
  defaultValueRatio: RatioInput
  defaultValueSampledData: SampledDataInput
  defaultValueSignature: SignatureInput
  defaultValueTiming: TimingInput
  defaultValueContactDetail: ContactDetailInput
  defaultValueContributor: ContributorInput
  defaultValueDataRequirement: DataRequirementInput
  defaultValueExpression: ExpressionInput
  defaultValueParameterDefinition: ParameterDefinitionInput
  defaultValueRelatedArtifact: RelatedArtifactInput
  defaultValueTriggerDefinition: TriggerDefinitionInput
  defaultValueUsageContext: UsageContextInput
  defaultValueDosage: DosageInput
  meaningWhenMissing: markdown  _meaningWhenMissing: ElementBaseInput
  orderMeaning: String  _orderMeaning: ElementBaseInput
  fixedBase64Binary: base64Binary  _fixedBase64Binary: ElementBaseInput
  fixedBoolean: Boolean  _fixedBoolean: ElementBaseInput
  fixedCanonical: canonical  _fixedCanonical: ElementBaseInput
  fixedCode: code  _fixedCode: ElementBaseInput
  fixedDate: date  _fixedDate: ElementBaseInput
  fixedDateTime: dateTime  _fixedDateTime: ElementBaseInput
  fixedDecimal: decimal  _fixedDecimal: ElementBaseInput
  fixedId: ID  _fixedId: ElementBaseInput
  fixedInstant: instant  _fixedInstant: ElementBaseInput
  fixedInteger: Int  _fixedInteger: ElementBaseInput
  fixedMarkdown: markdown  _fixedMarkdown: ElementBaseInput
  fixedOid: oid  _fixedOid: ElementBaseInput
  fixedPositiveInt: positiveInt  _fixedPositiveInt: ElementBaseInput
  fixedString: String  _fixedString: ElementBaseInput
  fixedTime: time  _fixedTime: ElementBaseInput
  fixedUnsignedInt: unsignedInt  _fixedUnsignedInt: ElementBaseInput
  fixedUri: uri  _fixedUri: ElementBaseInput
  fixedUrl: url  _fixedUrl: ElementBaseInput
  fixedUuid: uuid  _fixedUuid: ElementBaseInput
  fixedAddress: AddressInput
  fixedAge: AgeInput
  fixedAnnotation: AnnotationInput
  fixedAttachment: AttachmentInput
  fixedCodeableConcept: CodeableConceptInput
  fixedCoding: CodingInput
  fixedContactPoint: ContactPointInput
  fixedCount: CountInput
  fixedDistance: DistanceInput
  fixedDuration: DurationInput
  fixedHumanName: HumanNameInput
  fixedIdentifier: IdentifierInput
  fixedMoney: MoneyInput
  fixedPeriod: PeriodInput
  fixedQuantity: QuantityInput
  fixedRange: RangeInput
  fixedRatio: RatioInput
  fixedSampledData: SampledDataInput
  fixedSignature: SignatureInput
  fixedTiming: TimingInput
  fixedContactDetail: ContactDetailInput
  fixedContributor: ContributorInput
  fixedDataRequirement: DataRequirementInput
  fixedExpression: ExpressionInput
  fixedParameterDefinition: ParameterDefinitionInput
  fixedRelatedArtifact: RelatedArtifactInput
  fixedTriggerDefinition: TriggerDefinitionInput
  fixedUsageContext: UsageContextInput
  fixedDosage: DosageInput
  patternBase64Binary: base64Binary  _patternBase64Binary: ElementBaseInput
  patternBoolean: Boolean  _patternBoolean: ElementBaseInput
  patternCanonical: canonical  _patternCanonical: ElementBaseInput
  patternCode: code  _patternCode: ElementBaseInput
  patternDate: date  _patternDate: ElementBaseInput
  patternDateTime: dateTime  _patternDateTime: ElementBaseInput
  patternDecimal: decimal  _patternDecimal: ElementBaseInput
  patternId: ID  _patternId: ElementBaseInput
  patternInstant: instant  _patternInstant: ElementBaseInput
  patternInteger: Int  _patternInteger: ElementBaseInput
  patternMarkdown: markdown  _patternMarkdown: ElementBaseInput
  patternOid: oid  _patternOid: ElementBaseInput
  patternPositiveInt: positiveInt  _patternPositiveInt: ElementBaseInput
  patternString: String  _patternString: ElementBaseInput
  patternTime: time  _patternTime: ElementBaseInput
  patternUnsignedInt: unsignedInt  _patternUnsignedInt: ElementBaseInput
  patternUri: uri  _patternUri: ElementBaseInput
  patternUrl: url  _patternUrl: ElementBaseInput
  patternUuid: uuid  _patternUuid: ElementBaseInput
  patternAddress: AddressInput
  patternAge: AgeInput
  patternAnnotation: AnnotationInput
  patternAttachment: AttachmentInput
  patternCodeableConcept: CodeableConceptInput
  patternCoding: CodingInput
  patternContactPoint: ContactPointInput
  patternCount: CountInput
  patternDistance: DistanceInput
  patternDuration: DurationInput
  patternHumanName: HumanNameInput
  patternIdentifier: IdentifierInput
  patternMoney: MoneyInput
  patternPeriod: PeriodInput
  patternQuantity: QuantityInput
  patternRange: RangeInput
  patternRatio: RatioInput
  patternSampledData: SampledDataInput
  patternSignature: SignatureInput
  patternTiming: TimingInput
  patternContactDetail: ContactDetailInput
  patternContributor: ContributorInput
  patternDataRequirement: DataRequirementInput
  patternExpression: ExpressionInput
  patternParameterDefinition: ParameterDefinitionInput
  patternRelatedArtifact: RelatedArtifactInput
  patternTriggerDefinition: TriggerDefinitionInput
  patternUsageContext: UsageContextInput
  patternDosage: DosageInput
  example: [ElementDefinitionExampleInput]
  minValueDate: date  _minValueDate: ElementBaseInput
  minValueDateTime: dateTime  _minValueDateTime: ElementBaseInput
  minValueInstant: instant  _minValueInstant: ElementBaseInput
  minValueTime: time  _minValueTime: ElementBaseInput
  minValueDecimal: decimal  _minValueDecimal: ElementBaseInput
  minValueInteger: Int  _minValueInteger: ElementBaseInput
  minValuePositiveInt: positiveInt  _minValuePositiveInt: ElementBaseInput
  minValueUnsignedInt: unsignedInt  _minValueUnsignedInt: ElementBaseInput
  minValueQuantity: QuantityInput
  maxValueDate: date  _maxValueDate: ElementBaseInput
  maxValueDateTime: dateTime  _maxValueDateTime: ElementBaseInput
  maxValueInstant: instant  _maxValueInstant: ElementBaseInput
  maxValueTime: time  _maxValueTime: ElementBaseInput
  maxValueDecimal: decimal  _maxValueDecimal: ElementBaseInput
  maxValueInteger: Int  _maxValueInteger: ElementBaseInput
  maxValuePositiveInt: positiveInt  _maxValuePositiveInt: ElementBaseInput
  maxValueUnsignedInt: unsignedInt  _maxValueUnsignedInt: ElementBaseInput
  maxValueQuantity: QuantityInput
  maxLength: Int  _maxLength: ElementBaseInput
  condition: ID  _condition: [ElementBaseInput]
  constraint: [ElementDefinitionConstraintInput]
  mustSupport: Boolean  _mustSupport: ElementBaseInput
  isModifier: Boolean  _isModifier: ElementBaseInput
  isModifierReason: String  _isModifierReason: ElementBaseInput
  isSummary: Boolean  _isSummary: ElementBaseInput
  binding: ElementDefinitionBindingInput
  mapping: [ElementDefinitionMappingInput]
}

input ElementDefinitionSlicingInput {
  id: String
  extension: [ExtensionInput]
  discriminator: [ElementDefinitionSlicingDiscriminatorInput]
  description: String  _description: ElementBaseInput
  ordered: Boolean  _ordered: ElementBaseInput
  rules: code  _rules: ElementBaseInput
}

input ElementDefinitionSlicingDiscriminatorInput {
  id: String
  extension: [ExtensionInput]
  type: code  _type: ElementBaseInput
  path: String  _path: ElementBaseInput
}

input ElementDefinitionBaseInput {
  id: String
  extension: [ExtensionInput]
  path: String  _path: ElementBaseInput
  min: unsignedInt  _min: ElementBaseInput
  max: String  _max: ElementBaseInput
}

input ElementDefinitionTypeInput {
  id: String
  extension: [ExtensionInput]
  code: uri  _code: ElementBaseInput
  profile: canonical  _profile: [ElementBaseInput]
  targetProfile: canonical  _targetProfile: [ElementBaseInput]
  aggregation: code  _aggregation: [ElementBaseInput]
  versioning: code  _versioning: ElementBaseInput
}

input ElementDefinitionExampleInput {
  id: String
  extension: [ExtensionInput]
  label: String  _label: ElementBaseInput
  valueBase64Binary: base64Binary  _valueBase64Binary: ElementBaseInput
  valueBoolean: Boolean  _valueBoolean: ElementBaseInput
  valueCanonical: canonical  _valueCanonical: ElementBaseInput
  valueCode: code  _valueCode: ElementBaseInput
  valueDate: date  _valueDate: ElementBaseInput
  valueDateTime: dateTime  _valueDateTime: ElementBaseInput
  valueDecimal: decimal  _valueDecimal: ElementBaseInput
  valueId: ID  _valueId: ElementBaseInput
  valueInstant: instant  _valueInstant: ElementBaseInput
  valueInteger: Int  _valueInteger: ElementBaseInput
  valueMarkdown: markdown  _valueMarkdown: ElementBaseInput
  valueOid: oid  _valueOid: ElementBaseInput
  valuePositiveInt: positiveInt  _valuePositiveInt: ElementBaseInput
  valueString: String  _valueString: ElementBaseInput
  valueTime: time  _valueTime: ElementBaseInput
  valueUnsignedInt: unsignedInt  _valueUnsignedInt: ElementBaseInput
  valueUri: uri  _valueUri: ElementBaseInput
  valueUrl: url  _valueUrl: ElementBaseInput
  valueUuid: uuid  _valueUuid: ElementBaseInput
  valueAddress: AddressInput
  valueAge: AgeInput
  valueAnnotation: AnnotationInput
  valueAttachment: AttachmentInput
  valueCodeableConcept: CodeableConceptInput
  valueCoding: CodingInput
  valueContactPoint: ContactPointInput
  valueCount: CountInput
  valueDistance: DistanceInput
  valueDuration: DurationInput
  valueHumanName: HumanNameInput
  valueIdentifier: IdentifierInput
  valueMoney: MoneyInput
  valuePeriod: PeriodInput
  valueQuantity: QuantityInput
  valueRange: RangeInput
  valueRatio: RatioInput
  valueSampledData: SampledDataInput
  valueSignature: SignatureInput
  valueTiming: TimingInput
  valueContactDetail: ContactDetailInput
  valueContributor: ContributorInput
  valueDataRequirement: DataRequirementInput
  valueExpression: ExpressionInput
  valueParameterDefinition: ParameterDefinitionInput
  valueRelatedArtifact: RelatedArtifactInput
  valueTriggerDefinition: TriggerDefinitionInput
  valueUsageContext: UsageContextInput
  valueDosage: DosageInput
}

input ElementDefinitionConstraintInput {
  id: String
  extension: [ExtensionInput]
  key: ID  _key: ElementBaseInput
  requirements: String  _requirements: ElementBaseInput
  severity: code  _severity: ElementBaseInput
  human: String  _human: ElementBaseInput
  expression: String  _expression: ElementBaseInput
  xpath: String  _xpath: ElementBaseInput
  source: canonical  _source: ElementBaseInput
}

input ElementDefinitionBindingInput {
  id: String
  extension: [ExtensionInput]
  strength: code  _strength: ElementBaseInput
  description: String  _description: ElementBaseInput
  valueSet: canonical  _valueSet: ElementBaseInput
}

input ElementDefinitionMappingInput {
  id: String
  extension: [ExtensionInput]
  identity: ID  _identity: ElementBaseInput
  language: code  _language: ElementBaseInput
  map: String  _map: ElementBaseInput
  comment: String  _comment: ElementBaseInput
}

type Expression {
  id: String
  extension: [Extension]
  description: String  _description: ElementBase
  name: ID  _name: ElementBase
  language: code  _language: ElementBase
  expression: String  _expression: ElementBase
  reference: uri  _reference: ElementBase
}

input ExpressionInput {
  id: String
  extension: [ExtensionInput]
  description: String  _description: ElementBaseInput
  name: ID  _name: ElementBaseInput
  language: code  _language: ElementBaseInput
  expression: String  _expression: ElementBaseInput
  reference: uri  _reference: ElementBaseInput
}

type Extension {
  id: String
  extension: [Extension]
  url: uri!
  valueBase64Binary: base64Binary  _valueBase64Binary: ElementBase
  valueBoolean: Boolean  _valueBoolean: ElementBase
  valueCanonical: canonical  _valueCanonical: ElementBase
  valueCode: code  _valueCode: ElementBase
  valueDate: date  _valueDate: ElementBase
  valueDateTime: dateTime  _valueDateTime: ElementBase
  valueDecimal: decimal  _valueDecimal: ElementBase
  valueId: ID  _valueId: ElementBase
  valueInstant: instant  _valueInstant: ElementBase
  valueInteger: Int  _valueInteger: ElementBase
  valueMarkdown: markdown  _valueMarkdown: ElementBase
  valueOid: oid  _valueOid: ElementBase
  valuePositiveInt: positiveInt  _valuePositiveInt: ElementBase
  valueString: String  _valueString: ElementBase
  valueTime: time  _valueTime: ElementBase
  valueUnsignedInt: unsignedInt  _valueUnsignedInt: ElementBase
  valueUri: uri  _valueUri: ElementBase
  valueUrl: url  _valueUrl: ElementBase
  valueUuid: uuid  _valueUuid: ElementBase
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

input ExtensionInput {
  id: String
  extension: [ExtensionInput]
  url: uri!
  valueBase64Binary: base64Binary  _valueBase64Binary: ElementBaseInput
  valueBoolean: Boolean  _valueBoolean: ElementBaseInput
  valueCanonical: canonical  _valueCanonical: ElementBaseInput
  valueCode: code  _valueCode: ElementBaseInput
  valueDate: date  _valueDate: ElementBaseInput
  valueDateTime: dateTime  _valueDateTime: ElementBaseInput
  valueDecimal: decimal  _valueDecimal: ElementBaseInput
  valueId: ID  _valueId: ElementBaseInput
  valueInstant: instant  _valueInstant: ElementBaseInput
  valueInteger: Int  _valueInteger: ElementBaseInput
  valueMarkdown: markdown  _valueMarkdown: ElementBaseInput
  valueOid: oid  _valueOid: ElementBaseInput
  valuePositiveInt: positiveInt  _valuePositiveInt: ElementBaseInput
  valueString: String  _valueString: ElementBaseInput
  valueTime: time  _valueTime: ElementBaseInput
  valueUnsignedInt: unsignedInt  _valueUnsignedInt: ElementBaseInput
  valueUri: uri  _valueUri: ElementBaseInput
  valueUrl: url  _valueUrl: ElementBaseInput
  valueUuid: uuid  _valueUuid: ElementBaseInput
  valueAddress: AddressInput
  valueAge: AgeInput
  valueAnnotation: AnnotationInput
  valueAttachment: AttachmentInput
  valueCodeableConcept: CodeableConceptInput
  valueCoding: CodingInput
  valueContactPoint: ContactPointInput
  valueCount: CountInput
  valueDistance: DistanceInput
  valueDuration: DurationInput
  valueHumanName: HumanNameInput
  valueIdentifier: IdentifierInput
  valueMoney: MoneyInput
  valuePeriod: PeriodInput
  valueQuantity: QuantityInput
  valueRange: RangeInput
  valueRatio: RatioInput
  valueSampledData: SampledDataInput
  valueSignature: SignatureInput
  valueTiming: TimingInput
  valueContactDetail: ContactDetailInput
  valueContributor: ContributorInput
  valueDataRequirement: DataRequirementInput
  valueExpression: ExpressionInput
  valueParameterDefinition: ParameterDefinitionInput
  valueRelatedArtifact: RelatedArtifactInput
  valueTriggerDefinition: TriggerDefinitionInput
  valueUsageContext: UsageContextInput
  valueDosage: DosageInput
}

type HumanName {
  id: String
  extension: [Extension]
  use: code  _use: ElementBase
  text: String  _text: ElementBase
  family: String  _family: ElementBase
  given: [String]  _given: [ElementBase]
  prefix: String  _prefix: [ElementBase]
  suffix: String  _suffix: [ElementBase]
  period: Period
}

input HumanNameInput {
  id: String
  extension: [ExtensionInput]
  use: code  _use: ElementBaseInput
  text: String  _text: ElementBaseInput
  family: String  _family: ElementBaseInput
  given: [String]  _given: [ElementBaseInput]
  prefix: String  _prefix: [ElementBaseInput]
  suffix: String  _suffix: [ElementBaseInput]
  period: PeriodInput
}

type Identifier {
  id: String
  extension: [Extension]
  use: code  _use: ElementBase
  type: CodeableConcept
  system: uri  _system: ElementBase
  value: String  _value: ElementBase
  period: Period
  assigner: Reference
}

input IdentifierInput {
  id: String
  extension: [ExtensionInput]
  use: code  _use: ElementBaseInput
  type: CodeableConceptInput
  system: uri  _system: ElementBaseInput
  value: String  _value: ElementBaseInput
  period: PeriodInput
  assigner: ReferenceInput
}

type MarketingStatus {
  id: String
  extension: [Extension]
  modifierExtension: [Extension]
  country: CodeableConcept!
  jurisdiction: CodeableConcept
  status: CodeableConcept!
  dateRange: Period!
  restoreDate: dateTime  _restoreDate: ElementBase
}

input MarketingStatusInput {
  id: String
  extension: [ExtensionInput]
  modifierExtension: [ExtensionInput]
  country: CodeableConceptInput!
  jurisdiction: CodeableConceptInput
  status: CodeableConceptInput!
  dateRange: PeriodInput!
  restoreDate: dateTime  _restoreDate: ElementBaseInput
}

type Meta {
  id: String
  extension: [Extension]
  versionId: ID  _versionId: ElementBase
  lastUpdated: instant  _lastUpdated: ElementBase
  source: uri  _source: ElementBase
  profile: canonical  _profile: [ElementBase]
  security: [Coding]
  tag: [Coding]
}

input MetaInput {
  id: String
  extension: [ExtensionInput]
  versionId: ID  _versionId: ElementBaseInput
  lastUpdated: instant  _lastUpdated: ElementBaseInput
  source: uri  _source: ElementBaseInput
  profile: canonical  _profile: [ElementBaseInput]
  security: [CodingInput]
  tag: [CodingInput]
}

type Money {
  id: String
  extension: [Extension]
  value: decimal  _value: ElementBase
  currency: code  _currency: ElementBase
}

input MoneyInput {
  id: String
  extension: [ExtensionInput]
  value: decimal  _value: ElementBaseInput
  currency: code  _currency: ElementBaseInput
}

type Narrative {
  id: String
  extension: [Extension]
  status: code  _status: ElementBase
  div: xhtml  _div: ElementBase
}

input NarrativeInput {
  id: String
  extension: [ExtensionInput]
  status: code  _status: ElementBaseInput
  div: xhtml  _div: ElementBaseInput
}

type ParameterDefinition {
  id: String
  extension: [Extension]
  name: code  _name: ElementBase
  use: code  _use: ElementBase
  min: Int  _min: ElementBase
  max: String  _max: ElementBase
  documentation: String  _documentation: ElementBase
  type: code  _type: ElementBase
  profile: canonical  _profile: ElementBase
}

input ParameterDefinitionInput {
  id: String
  extension: [ExtensionInput]
  name: code  _name: ElementBaseInput
  use: code  _use: ElementBaseInput
  min: Int  _min: ElementBaseInput
  max: String  _max: ElementBaseInput
  documentation: String  _documentation: ElementBaseInput
  type: code  _type: ElementBaseInput
  profile: canonical  _profile: ElementBaseInput
}

type Period {
  id: String
  extension: [Extension]
  start: dateTime  _start: ElementBase
  end: dateTime  _end: ElementBase
}

input PeriodInput {
  id: String
  extension: [ExtensionInput]
  start: dateTime  _start: ElementBaseInput
  end: dateTime  _end: ElementBaseInput
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

input PopulationInput {
  id: String
  extension: [ExtensionInput]
  modifierExtension: [ExtensionInput]
  ageRange: RangeInput
  ageCodeableConcept: CodeableConceptInput
  gender: CodeableConceptInput
  race: CodeableConceptInput
  physiologicalCondition: CodeableConceptInput
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
  shape: String  _shape: ElementBase
  color: String  _color: [ElementBase]
  imprint: String  _imprint: [ElementBase]
  image: [Attachment]
  scoring: CodeableConcept
}

input ProdCharacteristicInput {
  id: String
  extension: [ExtensionInput]
  modifierExtension: [ExtensionInput]
  height: QuantityInput
  width: QuantityInput
  depth: QuantityInput
  weight: QuantityInput
  nominalVolume: QuantityInput
  externalDiameter: QuantityInput
  shape: String  _shape: ElementBaseInput
  color: String  _color: [ElementBaseInput]
  imprint: String  _imprint: [ElementBaseInput]
  image: [AttachmentInput]
  scoring: CodeableConceptInput
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

input ProductShelfLifeInput {
  id: String
  extension: [ExtensionInput]
  modifierExtension: [ExtensionInput]
  identifier: IdentifierInput
  type: CodeableConceptInput!
  period: QuantityInput!
  specialPrecautionsForStorage: [CodeableConceptInput]
}

type Quantity {
  id: String
  extension: [Extension]
  value: decimal  _value: ElementBase
  comparator: code  _comparator: ElementBase
  unit: String  _unit: ElementBase
  system: uri  _system: ElementBase
  code: code  _code: ElementBase
}

input QuantityInput {
  id: String
  extension: [ExtensionInput]
  value: decimal  _value: ElementBaseInput
  comparator: code  _comparator: ElementBaseInput
  unit: String  _unit: ElementBaseInput
  system: uri  _system: ElementBaseInput
  code: code  _code: ElementBaseInput
}

type Range {
  id: String
  extension: [Extension]
  low: Quantity
  high: Quantity
}

input RangeInput {
  id: String
  extension: [ExtensionInput]
  low: QuantityInput
  high: QuantityInput
}

type Ratio {
  id: String
  extension: [Extension]
  numerator: Quantity
  denominator: Quantity
}

input RatioInput {
  id: String
  extension: [ExtensionInput]
  numerator: QuantityInput
  denominator: QuantityInput
}

type Reference {
  id: String
  extension: [Extension]
  reference: String  _reference: ElementBase
  type: uri  _type: ElementBase
  identifier: Identifier
  display: String  _display: ElementBase
}

input ReferenceInput {
  id: String
  extension: [ExtensionInput]
  reference: String  _reference: ElementBaseInput
  type: uri  _type: ElementBaseInput
  identifier: IdentifierInput
  display: String  _display: ElementBaseInput
}

type RelatedArtifact {
  id: String
  extension: [Extension]
  type: code  _type: ElementBase
  label: String  _label: ElementBase
  display: String  _display: ElementBase
  citation: markdown  _citation: ElementBase
  url: url  _url: ElementBase
  document: Attachment
  resource: canonical  _resource: ElementBase
}

input RelatedArtifactInput {
  id: String
  extension: [ExtensionInput]
  type: code  _type: ElementBaseInput
  label: String  _label: ElementBaseInput
  display: String  _display: ElementBaseInput
  citation: markdown  _citation: ElementBaseInput
  url: url  _url: ElementBaseInput
  document: AttachmentInput
  resource: canonical  _resource: ElementBaseInput
}

type SampledData {
  id: String
  extension: [Extension]
  origin: Quantity!
  period: decimal  _period: ElementBase
  factor: decimal  _factor: ElementBase
  lowerLimit: decimal  _lowerLimit: ElementBase
  upperLimit: decimal  _upperLimit: ElementBase
  dimensions: positiveInt  _dimensions: ElementBase
  data: String  _data: ElementBase
}

input SampledDataInput {
  id: String
  extension: [ExtensionInput]
  origin: QuantityInput!
  period: decimal  _period: ElementBaseInput
  factor: decimal  _factor: ElementBaseInput
  lowerLimit: decimal  _lowerLimit: ElementBaseInput
  upperLimit: decimal  _upperLimit: ElementBaseInput
  dimensions: positiveInt  _dimensions: ElementBaseInput
  data: String  _data: ElementBaseInput
}

type Signature {
  id: String
  extension: [Extension]
  type: [Coding]!
  when: instant  _when: ElementBase
  who: Reference!
  onBehalfOf: Reference
  targetFormat: code  _targetFormat: ElementBase
  sigFormat: code  _sigFormat: ElementBase
  data: base64Binary  _data: ElementBase
}

input SignatureInput {
  id: String
  extension: [ExtensionInput]
  type: [CodingInput]!
  when: instant  _when: ElementBaseInput
  who: ReferenceInput!
  onBehalfOf: ReferenceInput
  targetFormat: code  _targetFormat: ElementBaseInput
  sigFormat: code  _sigFormat: ElementBaseInput
  data: base64Binary  _data: ElementBaseInput
}

type SubstanceAmount {
  id: String
  extension: [Extension]
  modifierExtension: [Extension]
  amountQuantity: Quantity
  amountRange: Range
  amountString: String  _amountString: ElementBase
  amountType: CodeableConcept
  amountText: String  _amountText: ElementBase
  referenceRange: SubstanceAmountReferenceRange
}

type SubstanceAmountReferenceRange {
  id: String
  extension: [Extension]
  lowLimit: Quantity
  highLimit: Quantity
}

input SubstanceAmountInput {
  id: String
  extension: [ExtensionInput]
  modifierExtension: [ExtensionInput]
  amountQuantity: QuantityInput
  amountRange: RangeInput
  amountString: String  _amountString: ElementBaseInput
  amountType: CodeableConceptInput
  amountText: String  _amountText: ElementBaseInput
  referenceRange: SubstanceAmountReferenceRangeInput
}

input SubstanceAmountReferenceRangeInput {
  id: String
  extension: [ExtensionInput]
  lowLimit: QuantityInput
  highLimit: QuantityInput
}

type Timing {
  id: String
  extension: [Extension]
  modifierExtension: [Extension]
  event: dateTime  _event: [ElementBase]
  repeat: TimingRepeat
  code: CodeableConcept
}

type TimingRepeat {
  id: String
  extension: [Extension]
  boundsDuration: Duration
  boundsRange: Range
  boundsPeriod: Period
  count: positiveInt  _count: ElementBase
  countMax: positiveInt  _countMax: ElementBase
  duration: decimal  _duration: ElementBase
  durationMax: decimal  _durationMax: ElementBase
  durationUnit: code  _durationUnit: ElementBase
  frequency: positiveInt  _frequency: ElementBase
  frequencyMax: positiveInt  _frequencyMax: ElementBase
  period: decimal  _period: ElementBase
  periodMax: decimal  _periodMax: ElementBase
  periodUnit: code  _periodUnit: ElementBase
  dayOfWeek: code  _dayOfWeek: [ElementBase]
  timeOfDay: time  _timeOfDay: [ElementBase]
  when: code  _when: [ElementBase]
  offset: unsignedInt  _offset: ElementBase
}

input TimingInput {
  id: String
  extension: [ExtensionInput]
  modifierExtension: [ExtensionInput]
  event: dateTime  _event: [ElementBaseInput]
  repeat: TimingRepeatInput
  code: CodeableConceptInput
}

input TimingRepeatInput {
  id: String
  extension: [ExtensionInput]
  boundsDuration: DurationInput
  boundsRange: RangeInput
  boundsPeriod: PeriodInput
  count: positiveInt  _count: ElementBaseInput
  countMax: positiveInt  _countMax: ElementBaseInput
  duration: decimal  _duration: ElementBaseInput
  durationMax: decimal  _durationMax: ElementBaseInput
  durationUnit: code  _durationUnit: ElementBaseInput
  frequency: positiveInt  _frequency: ElementBaseInput
  frequencyMax: positiveInt  _frequencyMax: ElementBaseInput
  period: decimal  _period: ElementBaseInput
  periodMax: decimal  _periodMax: ElementBaseInput
  periodUnit: code  _periodUnit: ElementBaseInput
  dayOfWeek: code  _dayOfWeek: [ElementBaseInput]
  timeOfDay: time  _timeOfDay: [ElementBaseInput]
  when: code  _when: [ElementBaseInput]
  offset: unsignedInt  _offset: ElementBaseInput
}

type TriggerDefinition {
  id: String
  extension: [Extension]
  type: code  _type: ElementBase
  name: String  _name: ElementBase
  timingTiming: Timing
  timingReference: Reference
  timingDate: date  _timingDate: ElementBase
  timingDateTime: dateTime  _timingDateTime: ElementBase
  data: [DataRequirement]
  condition: Expression
}

input TriggerDefinitionInput {
  id: String
  extension: [ExtensionInput]
  type: code  _type: ElementBaseInput
  name: String  _name: ElementBaseInput
  timingTiming: TimingInput
  timingReference: ReferenceInput
  timingDate: date  _timingDate: ElementBaseInput
  timingDateTime: dateTime  _timingDateTime: ElementBaseInput
  data: [DataRequirementInput]
  condition: ExpressionInput
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

input UsageContextInput {
  id: String
  extension: [ExtensionInput]
  code: CodingInput!
  valueCodeableConcept: CodeableConceptInput
  valueQuantity: QuantityInput
  valueRange: RangeInput
  valueReference: ReferenceInput
}

type Patient {
  id: ID
  meta: Meta
  implicitRules: uri  _implicitRules: ElementBase
  language: code  _language: ElementBase
  text: Narrative
  #contained: [Resource]
  extension: [Extension]
  modifierExtension: [Extension]
  identifier: [Identifier]
  active: Boolean  _active: ElementBase
  name: [HumanName]
  telecom: [ContactPoint]
  gender: code  _gender: ElementBase
  birthDate: date  _birthDate: ElementBase
  deceasedBoolean: Boolean  _deceasedBoolean: ElementBase
  deceasedDateTime: dateTime  _deceasedDateTime: ElementBase
  address: [Address]
  maritalStatus: CodeableConcept
  multipleBirthBoolean: Boolean  _multipleBirthBoolean: ElementBase
  multipleBirthInteger: Int  _multipleBirthInteger: ElementBase
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
  gender: code  _gender: ElementBase
  organization: Reference
  period: Period
}

type PatientCommunication {
  id: String
  extension: [Extension]
  modifierExtension: [Extension]
  language: CodeableConcept!
  preferred: Boolean  _preferred: ElementBase
}

type PatientLink {
  id: String
  extension: [Extension]
  modifierExtension: [Extension]
  other: Reference!
  type: code  _type: ElementBase
}

input PatientInput {
  id: ID
  meta: MetaInput
  implicitRules: uri  _implicitRules: ElementBaseInput
  language: code  _language: ElementBaseInput
  text: NarrativeInput
  #contained: [ResourceInput]
  extension: [ExtensionInput]
  modifierExtension: [ExtensionInput]
  identifier: [IdentifierInput]
  active: Boolean  _active: ElementBaseInput
  name: [HumanNameInput]
  telecom: [ContactPointInput]
  gender: code  _gender: ElementBaseInput
  birthDate: date  _birthDate: ElementBaseInput
  deceasedBoolean: Boolean  _deceasedBoolean: ElementBaseInput
  deceasedDateTime: dateTime  _deceasedDateTime: ElementBaseInput
  address: [AddressInput]
  maritalStatus: CodeableConceptInput
  multipleBirthBoolean: Boolean  _multipleBirthBoolean: ElementBaseInput
  multipleBirthInteger: Int  _multipleBirthInteger: ElementBaseInput
  photo: [AttachmentInput]
  contact: [PatientContactInput]
  communication: [PatientCommunicationInput]
  generalPractitioner: [ReferenceInput]
  managingOrganization: ReferenceInput
  link: [PatientLinkInput]
}

input PatientContactInput {
  id: String
  extension: [ExtensionInput]
  modifierExtension: [ExtensionInput]
  relationship: [CodeableConceptInput]
  name: HumanNameInput
  telecom: [ContactPointInput]
  address: AddressInput
  gender: code  _gender: ElementBaseInput
  organization: ReferenceInput
  period: PeriodInput
}

input PatientCommunicationInput {
  id: String
  extension: [ExtensionInput]
  modifierExtension: [ExtensionInput]
  language: CodeableConceptInput!
  preferred: Boolean  _preferred: ElementBaseInput
}

input PatientLinkInput {
  id: String
  extension: [ExtensionInput]
  modifierExtension: [ExtensionInput]
  other: ReferenceInput!
  type: code  _type: ElementBaseInput
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

type PatientCreateType {
  PatientCreate(resource: PatientInput): PatientCreation
}

type PatientCreation {
  location: String
  resource: Patient
  information: OperationOutcome
}

type PatientUpdateType {
  PatientUpdate(id: ID, resource: PatientInput): PatientUpdate
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

type Mutation {
  PatientCreate(resource: PatientInput): PatientCreation
}
`;