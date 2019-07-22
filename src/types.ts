import { List } from 'immutable';

export enum Mode {Product = 'product', Knot = 'knot'}

export interface Criteria {
    title: string;
}

export interface Photo {
    uid: string,
    path?: string
}

export interface LocalPhoto extends Photo {
    rotate: number;
    source?: string;
}

export interface RequestFeature {
    feature_id: string;
    status: string;
    note?: string;
    mode?: Mode;
    photos?: List<LocalPhoto | Photo>;
}

export interface Feature {
    feature_id: string;
    title: string;
    note?: string;
    status: string;
    photos?: List<LocalPhoto | Photo>;
}

export interface Method {
    id: string;
    title: string;
}

export interface Operation {
    operation_id: string;
    discrepancy: boolean;
    group: string;
    title: string;
    frequency?: number;
    method: Method[];
    criterias: Criteria[];
    docs: string;
    features: Feature[];
}

export interface Check {
    check_id: string;
    stage_title: string;
    product_id: string;
    contract_code: string;
    contract_annex: string;
    product_number: string;
    product_position: string;
    product_title: string;
    date_stage_start: string;
    date_stage_end: string;
    date_actual_start: string;
    date_actual_end: string;
    date_cargo: string;
    date_last_check: string;
    date_end?: string;
    operations: Operation[];
    note: string;
    progress: string;
    complite: boolean;
}

export interface Stage {
    stage_id: string;
    title: string;
}

export interface ChecksState {
    isFetch: boolean;
    list: Array<Check>;
    stages: Array<Stage>;
    features: Map<string, RequestFeature>;
    search: string;
    isNetwork:boolean;
    drawerOpen: boolean;
}

export interface Knot {
    knot_id: string;
    knot_group_id: string;
    knot_number: string;
    knot_title: string;
    knot_count?: number | string;
    date_last_check: number | string;
    product_id: string;
    operations: KnotOperation[];
    product_title: string;
    position: string;
}
export interface KnotOperation {
    operation_id: string;
    group: string;
    title: string;
    docs?: string;
    discrepancy?: string | boolean;
    method: KnotMethod[];
    features: KnotFeatures[];
    criterias: KnotCriteria[];
}
export interface KnotMethod {
    id: string;
    title: string;
}

export interface KnotFeatures {
    feature_id: string;
    title: string;
    photos?: KnotPhoto[];
}

export interface KnotPhoto {
    uid: string;
    path: string;
}
export interface KnotCriteria {
    title: string;
}
export interface Product {
    number: string;
    position: string;
    title: string;
}

export interface KnotsState {
    knots: Array<Knot>;
    products: Array<Product>;
    search: string,
    drawerOpen: boolean
}

export interface Ticket {
    uid: string,
    subject: string,
    userId: string,
    annotation: string,
    status: string,
    isArchived: string,
    created: string,
    updated: string,
}

export interface Message {
    id: string;
    authorId: string;
    ticketId: string;
    text: string;
    hidden: string;
    created: string;
}

export interface ResponseTicketPayload {
    ticket: Ticket;
    messages: Message[];
}
