// soccer service ini

import { Injectable } from "@angular/core";
import { SEASON_SCHEDULE,TEAMS } from "./ScheduleData";

@Injectable({
    providedIn: 'root',
})
export class SoccerService {
    getScheduleAsync(){
        return Promise.resolve(SEASON_SCHEDULE);
    }
    getSchedule(){
        return SEASON_SCHEDULE;
    }
    getAllTeamsAsync(){
        return Promise.resolve(TEAMS)
    }
    getAllTeams(){
        return TEAMS;
    }
    private ComputeRankings(){
        //untuk compute ranking dari schedule
    }
}