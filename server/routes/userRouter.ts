const express = require("express");
import pool from "../modules/pool.ts";

import { UserType } from "../../src/types/UserType.ts";

const passportConfig = require('../strategies/passportConfig');
const router = express.Router();

// Find a user by username
export const findUserByUsername = async (username: string) => {
    console.log('Find user by email called');
    const result = await pool.query(
        'SELECT * FROM "user" WHERE username = $1',
        [username]
    );
    return result.rows[0];
};