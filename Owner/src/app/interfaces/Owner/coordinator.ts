export interface OrderCoordinator {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    photo: string;
    password: string;
    password_confirmation: string;
    email_verified_at: string;
    created_at: string | null;
    updated_at: string;
    disable: number
}

export interface OrderCoordinatorStats {
    total_order_cordinators: number;
    order_cordinator_today: number;
    order_cordinator_month: number;
    order_cordinator_year: number;
}