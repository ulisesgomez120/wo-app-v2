interface Workout_Data {
    id: string;
    workouts: Workout[];
}
interface Workout {
    name: string;
    sets: string;
    rpe: string;
    reps: string;
    rest: string;
    type: string;
    subs: string;
    tips: string;
    po_frequency: number;
    po_weight: number;
    id: string;
}
export const full_body_workouts: Workout_Data[] = [
    {
        id: "fbm1d1",
        workouts: [
            {
                "id": "31992ff5-1a30-492b-a78a-8ed8842c566e",
                "name": "back_squat",
                "sets": "3",
                "rpe": "7",
                "reps": "6",
                "rest": "3-4 min",
                "type": "compound",
                "subs": "",
                "tips": "SIT BACK AND DOWN, 15° TOE FLARE, DRIVE YOUR KNEES OUT LATERALLY",
                "po_frequency": 0,
                "po_weight": 0
            },
            {
                "id": "be889ed6-f5c6-448a-a5a1-d41c16e64035",
                "name": "barbell_bench_press",
                "sets": "3",
                "rpe": "7",
                "reps": "8",
                "rest": "3-4 min",
                "type": "compound",
                "subs": "",
                "tips": "TUCK ELBOWS AT A 45° ANGLE, SQUEEZE YOUR SHOULDER BALDES AND STAY FIRM ON THE BENCH",
                "po_frequency": 0,
                "po_weight": 0
            },
            {
                "id": "664b262d-08c5-426e-9116-bd2fe45b77f7",
                "name": "lat_pulldown",
                "sets": "3",
                "rpe": "8",
                "reps": "10",
                "rest": "2-3 min",
                "type": "iso",
                "subs": "",
                "tips": "PULL YOUR ELBOWS DOWN AND IN, USE A 1.5X SHOULDER WIDTH GRIP",
                "po_frequency": 0,
                "po_weight": 0
            },
            {
                "name": "romanian_deadlift",
                "sets": "3",
                "rpe": "7",
                "reps": "10",
                "rest": "2-3 min",
                "type": "compound",
                "subs": "",
                "tips": "MAINTAIN A NEUTRAL LOWER BACK, SET YOUR HIPS BACK, DON'T ALLOW YOUR SPINE TO ROUND",
                "po_frequency": 0,
                "po_weight": 0,
                "id": "0222a110-aafa-41ea-9d37-1a8ab8e214cb"
            },
            {
                "name": "assisted_dip",
                "sets": "3",
                "rpe": "7",
                "reps": "8",
                "rest": "1-2 min",
                "type": "iso",
                "subs": "",
                "tips": "TUCK ELBOWS AT A 45° ANGLE, LEAN YOUR TORSO FORWARD 15°",
                "po_frequency": 0,
                "po_weight": 0,
                "id": "98b2ede3-6628-4044-b04e-c7933ebe1b40"
            },
            {
                "name": "standing_calf_raise",
                "sets": "3",
                "rpe": "8",
                "reps": "10",
                "rest": "1-2 min",
                "type": "iso",
                "subs": "",
                "tips": "PRESS ALL THE WAY UP TO YOUR TOES, STRETCH YOUR CALVES AT THE TO BOTTOM, DON'T BOUNCE",
                "po_frequency": 0,
                "po_weight": 0,
                "id": "a05cb5e2-c250-475d-b55f-d8420a18ffee"
            },
            {
                "name": "db_supinated_curl",
                "sets": "3",
                "rpe": "8",
                "reps": "10",
                "rest": "1-2 min",
                "type": "iso",
                "subs": "",
                "tips": "DRIVE YOUR PINKY INTO THE HANDLE HARDER THAN YOUR POINTER FINGER",
                "po_frequency": 0,
                "po_weight": 0,
                "id": "5dc0c930-6122-4269-bb90-82a85a2ade07"
            }
        ]
    },
    {
        id: "fbm1d2",
        workouts: [
            {
                "name": "DEADLIFT",
                "sets": "3",
                "rpe": "7",
                "reps": "5",
                "rest": "3-4min",
                "type": "",
                "subs": "",
                "tips": "BRACE YOUR LATS, CHEST TALL, HIPS HIGH, PULL THE SLACK OUT OF THE BAR PRIOR TO MOVING IT OFF THE GROUND",
                "po_frequency": 0,
                "po_weight": 0,
                "id": "4475b9d0-a815-43a9-aba8-3370215e32e8"
            },
            {
                "name": "OVERHEAD PRESS",
                "sets": "3",
                "rpe": "8",
                "reps": "8",
                "rest": "3-4min",
                "type": "",
                "subs": "",
                "tips": "SQUEEZE YOUR GLUTES TO KEEP YOUR TORSO UPRIGHT, CLEAR YOUR HEAD OUT OF THE WAY, PRESS UP AND SLIGHTLY BACK",
                "po_frequency": 0,
                "po_weight": 0,
                "id": "0cd31bb6-411b-4a37-aeff-0cf0f21782f8"
            },
            {
                "name": "CHEST-SUPPORTED T-BAR ROW",
                "sets": "3",
                "rpe": "8",
                "reps": "12",
                "rest": "2-3min",
                "type": "",
                "subs": "",
                "tips": "FOCUS ON SQUEEZING YOUR SHOULDER BLADES TOGETHER AS YOU PULL THE WEIGHT TOWARDS YOU. KEEP YOUR SHOULDERS DOWN (AVOID SHRUGGING).",
                "po_frequency": 0,
                "po_weight": 0,
                "id": "3462f62c-cad8-43c8-aacd-3cc59d482707"
            },
            {
                "name": "LEG EXTENSION",
                "sets": "3",
                "rpe": "8",
                "reps": "12",
                "rest": "1-2min",
                "type": "",
                "subs": "",
                "tips": "FOCUS ON SQUEEZING YOUR QUADS TO MAKE THE WEIGHT MOVE",
                "po_frequency": 0,
                "po_weight": 0,
                "id": "473d1892-4992-4ae9-b518-514ef780929e"
            },
            {
                "name": "CABLE FLYE",
                "sets": "3",
                "rpe": "8",
                "reps": "12",
                "rest": "1-2min",
                "type": "",
                "subs": "",
                "tips": "KEEP YOUR ELBOWS SLIGHTLY BENT AT A CONSTANT ANGLE WHILE SQUEEZING YOUR PECS TO MOVE THE WEIGHT",
                "po_frequency": 0,
                "po_weight": 0,
                "id": "759cda98-615b-4fb1-9d65-4182877953c2"
            },
            {
                "name": "CRUNCH",
                "sets": "3",
                "rpe": "7",
                "reps": "12",
                "rest": "1-2min",
                "type": "",
                "subs": "",
                "tips": "FOCUS ON FLEXING YOUR SPINE (ROUNDING YOUR BACK), DON'T YANK YOUR HEAD WITH YOUR ARMS",
                "po_frequency": 0,
                "po_weight": 0,
                "id": "6da95634-f416-4156-b045-c9e339c404fb"
            },
            {
                "name": "DUMBBELL SKULL CRUSHER",
                "sets": "3",
                "rpe": "8",
                "reps": "12",
                "rest": "1-2min",
                "type": "",
                "subs": "",
                "tips": "KEEP YOUR ELBOWS IN LINE WITH THE TOP OF YOUR HEAD, DON'T LET YOUR UPPER ARM MOVE",
                "po_frequency": 0,
                "po_weight": 0,
                "id": "291b4f4f-edb0-4194-b8de-b7727277ef21"
            }
        ]
    },
    {
        id: "fbm1d3",
        workouts: [
            {
                "name": "DUMBBELL WALKING LUNGE",
                "sets": "3",
                "rpe": "8",
                "reps": "10",
                "rest": "2-3min",
                "type": "",
                "subs": "",
                "tips": "10 STEPS EACH LEG. TAKE MEDIUM STRIDES, LET YOUR TORSO LEAN FORWARD",
                "po_frequency": 0,
                "po_weight": 0,
                "id": "f9d590e6-2235-4059-86e3-92bd36161b09"
            },
            {
                "name": "DUMBBELL INCLINE PRESS",
                "sets": "3",
                "rpe": "7",
                "reps": "8",
                "rest": "2-3min",
                "type": "",
                "subs": "",
                "tips": "USE ~45 DEGREE INCLINE. MIND MUSCLE CONNECTION WITH UPPER PECS",
                "po_frequency": 0,
                "po_weight": 0,
                "id": "63eb63f3-0ff9-46ba-9ee1-563c3400813d"
            },
            {
                "name": "REVERSE GRIP LAT PULLDOWN",
                "sets": "3",
                "rpe": "8",
                "reps": "10",
                "rest": "2-3min",
                "type": "",
                "subs": "",
                "tips": "PULL YOUR ELBOWS DOWN AGAINST YOUR SIDES, USE SHOULDER WIDTH GRIP",
                "po_frequency": 0,
                "po_weight": 0,
                "id": "fad772a5-0c20-4786-a1cf-e405f8a0d131"
            },
            {
                "name": "BARBELL HIP THRUST",
                "sets": "3",
                "rpe": "8",
                "reps": "12",
                "rest": "2-3min",
                "type": "",
                "subs": "",
                "tips": "TUCK YOUR CHIN AND RIB CAGE DOWN, ONLY MOVE YOUR HIPS. USE A PAD",
                "po_frequency": 0,
                "po_weight": 0,
                "id": "099933c0-6cae-4d09-9a35-a2f9dbfc7234"
            },
            {
                "name": "SEATED FACE PULL",
                "sets": "3",
                "rpe": "8",
                "reps": "12",
                "rest": "1-2min",
                "type": "",
                "subs": "",
                "tips": "PULL YOUR ARMS BACK AND OUT",
                "po_frequency": 0,
                "po_weight": 0,
                "id": "6ee0567a-e80f-41f4-98cb-06a6526c5032"
            },
            {
                "name": "DUMBBELL LATERAL RAISE",
                "sets": "3",
                "rpe": "8",
                "reps": "10",
                "rest": "1-2min",
                "type": "",
                "subs": "",
                "tips": "RAISE THE DUMBBELL \"OUT\" NOT \"UP\", MIND MUSCLE CONNECTION WITH MIDDLE FIBERS",
                "po_frequency": 0,
                "po_weight": 0,
                "id": "663e12db-6ca4-4bcd-aab1-e73e5bae8351"
            },
            {
                "name": "LYING LEG CURL",
                "sets": "3",
                "rpe": "8",
                "reps": "10",
                "rest": "1-2min",
                "type": "",
                "subs": "",
                "tips": "FOCUS ON SQUEEZING YOUR HAMSTRINGS TO MAKE THE WEIGHT MOVE",
                "po_frequency": 0,
                "po_weight": 0,
                "id": "8577cccb-cebe-4dc2-a114-79a937589772"
            }
        ]
    },
    {
        id: "fbm2d1",
        workouts: [
            {
                "name": "BACK SQUAT",
                "sets": "3",
                "rpe": "8",
                "reps": "8",
                "rest": "3-4min",
                "type": "",
                "subs": "",
                "tips": "SIT BACK AND DOWN, 15° TOE FLARE, DRIVE YOUR KNEES OUT LATERALLY",
                "po_frequency": 0,
                "po_weight": 0,
                "id": "0a624048-6db5-4431-b9fd-a71f62165436"
            },
            {
                "name": "DUMBBELL SEATED SHOULDER PRESS",
                "sets": "3",
                "rpe": "8",
                "reps": "10",
                "rest": "3-4min",
                "type": "",
                "subs": "",
                "tips": "BRING THE DUMBBELL ALL THE WAY DOWN TO YOUR SHOULDERS, KEEP YOUR TORSO UPRIGHT",
                "po_frequency": 0,
                "po_weight": 0,
                "id": "19d8e6ee-3f3e-4222-bce0-612ac5f5df80"
            },
            {
                "name": "SINGLE-ARM PULLDOWN",
                "sets": "3",
                "rpe": "9",
                "reps": "12",
                "rest": "2-3min",
                "type": "",
                "subs": "",
                "tips": "START WITH YOUR NON-DOMINANT ARM, MATCH REPS WITH DOMINANT ARM",
                "po_frequency": 0,
                "po_weight": 0,
                "id": "2fa3ef19-84ba-425b-b7d6-bbb170c01063"
            },
            {
                "name": "BARBELL HIP THRUST",
                "sets": "3",
                "rpe": "9",
                "reps": "8",
                "rest": "2-3min",
                "type": "",
                "subs": "",
                "tips": "TUCK YOUR CHIN AND RIB CAGE DOWN, ONLY MOVE YOUR HIPS. USE A PAD",
                "po_frequency": 0,
                "po_weight": 0,
                "id": "3bf85441-f0f2-489e-b7c7-1103a05903a2"
            },
            {
                "name": "PEC DECK",
                "sets": "3",
                "rpe": "9",
                "reps": "15",
                "rest": "1-2min",
                "type": "",
                "subs": "",
                "tips": "KEEP YOUR SCAPULAE RETRACTED, PULL YOUR INNER ELBOWS TOGETHER (NOT YOUR HANDS)",
                "po_frequency": 0,
                "po_weight": 0,
                "id": "e9471a0f-8b69-46dd-91dd-f1946cb31e1b"
            },
            {
                "name": "REVERSE PEC DECK",
                "sets": "3",
                "rpe": "9",
                "reps": "15",
                "rest": "1-2min",
                "type": "",
                "subs": "",
                "tips": "SWEEP THE WEIGHT OUT AND BACK, MIND MUSCLE CONNECTION WITH REAR DELTS",
                "po_frequency": 0,
                "po_weight": 0,
                "id": "1e6687a6-1d55-4084-b4c9-5d2ed9c4f344"
            },
            {
                "name": "CABLE LATERAL RAISE",
                "sets": "3",
                "rpe": "9",
                "reps": "12",
                "rest": "1-2min",
                "type": "",
                "subs": "",
                "tips": "LEAN AWAY FROM THE MACHINE, ARMS STRAIGHT OUT TO YOUR SIDE",
                "po_frequency": 0,
                "po_weight": 0,
                "id": "80ddfd06-3d35-43bd-91da-427a4a01c788"
            }
        ]
    },
    {
        id: "fbm2d2",
        workouts: [
            {
                "name": "DEADLIFT",
                "sets": "3",
                "rpe": "8",
                "reps": "3",
                "rest": "3-4min",
                "type": "",
                "subs": "",
                "tips": "BRACE YOUR LATS, CHEST TALL, HIPS HIGH, PULL THE SLACK OUT OF THE BAR PRIOR TO MOVING IT OFF THE GROUND",
                "po_frequency": 0,
                "po_weight": 0,
                "id": "9ee16208-25c1-4204-b03e-4017614bdb46"
            },
            {
                "name": "CLOSE-GRIP BENCH PRESS",
                "sets": "3",
                "rpe": "7",
                "reps": "5",
                "rest": "3-4min",
                "type": "",
                "subs": "",
                "tips": "SHOULDER WIDTH GRIP, TUCK YOUR ELBOWS AGAINST YOUR SIDES",
                "po_frequency": 0,
                "po_weight": 0,
                "id": "7639f753-32bf-4abb-9d5f-aa2a2fb91356"
            },
            {
                "name": "DUMBBELL ROW",
                "sets": "3",
                "rpe": "8",
                "reps": "12",
                "rest": "2-3min",
                "type": "",
                "subs": "",
                "tips": "BRACE ONTO A BENCH FOR SUPPORT, PULL YOUR ELBOW AGAINST YOUR SIDES",
                "po_frequency": 0,
                "po_weight": 0,
                "id": "adeabf82-939c-407a-a2aa-68be4d1ea1e1"
            },
            {
                "name": "DUMBBELL WALKING LUNGE",
                "sets": "3",
                "rpe": "8",
                "reps": "12",
                "rest": "1-2min",
                "type": "",
                "subs": "",
                "tips": "12 STEPS EACH LEG. TAKE MEDIUM STRIDES, LET YOUR TORSO LEAN FORWARD",
                "po_frequency": 0,
                "po_weight": 0,
                "id": "d6df3f3a-54ce-4d28-93fc-2e6c61b11651"
            },
            {
                "name": "ASSISTED DIP",
                "sets": "3",
                "rpe": "8",
                "reps": "12",
                "rest": "1-2min",
                "type": "",
                "subs": "",
                "tips": "TUCK ELBOWS AT A 45° ANGLE, LEAN YOUR TORSO FORWARD 15°",
                "po_frequency": 0,
                "po_weight": 0,
                "id": "e6613d08-8b0d-4121-a61b-96493fadef58"
            },
            {
                "name": "BICYCLE CRUNCH",
                "sets": "3",
                "rpe": "7",
                "reps": "10",
                "rest": "1-2min",
                "type": "",
                "subs": "",
                "tips": "FOCUS ON FLEXING AND ROTATING YOUR SPINE, BRING YOUR LEFT ELBOW TO RIGHT KNEE, RIGHT ELBOW TO LEFT KNEE",
                "po_frequency": 0,
                "po_weight": 0,
                "id": "6f199133-eb22-4ccf-bea3-0098981542a8"
            },
            {
                "name": "SINGLE-ARM CABLE CURL",
                "sets": "3",
                "rpe": "8",
                "reps": "12",
                "rest": "1-2min",
                "type": "",
                "subs": "",
                "tips": "FACE AWAY FROM THE CABLE YOU ARE USING, KEEP YOUR ARM BEHIND YOUR TORSO",
                "po_frequency": 0,
                "po_weight": 0,
                "id": "84ae8659-d5cc-4bb6-b169-ab9020d1296a"
            }
        ]
    },
    {
        id: "fbm2d3",
        workouts: [
            {
                "name": "BACK SQUAT",
                "sets": "3",
                "rpe": "8",
                "reps": "5",
                "rest": "2-3min",
                "type": "",
                "subs": "",
                "tips": "SIT BACK AND DOWN, 15° TOE FLARE, DRIVE YOUR KNEES OUT LATERALLY",
                "po_frequency": 0,
                "po_weight": 0,
                "id": "a0dc6759-5ee2-4040-8eec-d8b060eed867"
            },
            {
                "name": "BARBELL BENCH PRESS",
                "sets": "3",
                "rpe": "8",
                "reps": "10",
                "rest": "2-3min",
                "type": "",
                "subs": "",
                "tips": "TUCK ELBOWS AT A 45° ANGLE, SQUEEZE YOUR SHOULDER BALDES AND STAY FIRM ON THE BENCH",
                "po_frequency": 0,
                "po_weight": 0,
                "id": "d64299ff-246a-4553-8d72-83c081f603b9"
            },
            {
                "name": "NEUTRAL-GRIP PULLDOWN",
                "sets": "3",
                "rpe": "8",
                "reps": "15",
                "rest": "2-3min",
                "type": "",
                "subs": "",
                "tips": "PALMS FACING EACH OTHER. PULL YOUR ELBOWS AGAINST YOUR SIDES",
                "po_frequency": 0,
                "po_weight": 0,
                "id": "c2e9e625-1edc-4e92-9105-5ce8d77fa047"
            },
            {
                "name": "LYING LEG CURL",
                "sets": "3",
                "rpe": "8",
                "reps": "12",
                "rest": "2-3min",
                "type": "",
                "subs": "",
                "tips": "FOCUS ON SQUEEZING YOUR HAMSTRINGS TO MAKE THE WEIGHT MOVE",
                "po_frequency": 0,
                "po_weight": 0,
                "id": "61e97c9c-fc06-47be-9f24-3600a4ce49c2"
            },
            {
                "name": "SEATED FACE PULL",
                "sets": "3",
                "rpe": "8",
                "reps": "15",
                "rest": "1-2min",
                "type": "",
                "subs": "",
                "tips": "PULL YOUR ARMS BACK AND OUT",
                "po_frequency": 0,
                "po_weight": 0,
                "id": "c56dda5c-b349-48b3-886b-ef2427a762fc"
            },
            {
                "name": "SINGLE-ARM ROPE TRICEP EXTENSION",
                "sets": "3",
                "rpe": "8",
                "reps": "12",
                "rest": "1-2min",
                "type": "",
                "subs": "",
                "tips": "PULL YOUR ARM BEHIND YOUR TORSO, DON'T MOVE YOUR UPPER ARM",
                "po_frequency": 0,
                "po_weight": 0,
                "id": "38ff0e26-f979-4f9f-b6b2-3baca9432145"
            },
            {
                "name": "STANDING CALF RAISE",
                "sets": "3",
                "rpe": "8",
                "reps": "10",
                "rest": "1-2min",
                "type": "",
                "subs": "",
                "tips": "PRESS ALL THE WAY UP TO YOUR TOES, STRETCH YOUR CALVES AT THE TO BOTTOM, DON'T BOUNCE",
                "po_frequency": 0,
                "po_weight": 0,
                "id": "2fb600f3-9066-4d22-8494-88cba58af919"
            }
        ]
    },
];