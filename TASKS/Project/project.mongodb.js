/*
Project Title:
Student Course Registration Management System using MongoDB

Problem Statement:
Design and implement a MongoDB-based Student Course Registration Management
System for a university. The system should store student, course, and
enrollment information and support all major CRUD operations. The project
includes sample data, queries, updates, deletions, and meaningful outputs.

Project Objective:
- Create new student and course records
- Read and display data using queries
- Update student and course information
- Delete records when needed

Collection Design:
1. students
   - student_id
   - name
   - department
   - year
   - email
   - phone

2. courses
   - course_id
   - course_name
   - faculty
   - credits

3. enrollments
   - enrollment_id
   - student_id
   - course_id
   - semester
   - grade

Short Report:
This MongoDB project manages students, courses, and enrollments for a
university. Separate collections are used to store each type of record.
CRUD operations are demonstrated using insertMany(), find(), findOne(),
updateOne(), deleteOne(), deleteMany(), and aggregate() with lookup.

Conclusion:
This project helped in understanding how MongoDB can be used for real-world
database management. It shows how documents and collections can model a
university registration system and how CRUD operations can be performed
efficiently on related data.
*/

use("WEEK07");

const students = db.students;
const courses = db.courses;
const enrollments = db.enrollments;

print("\n====================================================");
print("Student Course Registration Management System");
print("====================================================\n");

print("Resetting existing project data...");
students.drop();
courses.drop();
enrollments.drop();

print("\nCreating collections...");
db.createCollection("students");
db.createCollection("courses");
db.createCollection("enrollments");

print("\n==================== CREATE OPERATIONS ====================\n");

print("Inserting 10 student records...");
students.insertMany([
  {
    student_id: "S101",
    name: "Aisha Khan",
    department: "Computer Science",
    year: 1,
    email: "aisha.khan@university.edu",
    phone: "9800000001"
  },
  {
    student_id: "S102",
    name: "Rahul Mehta",
    department: "Computer Science",
    year: 2,
    email: "rahul.mehta@university.edu",
    phone: "9800000002"
  },
  {
    student_id: "S103",
    name: "Fatima Noor",
    department: "Electronics",
    year: 3,
    email: "fatima.noor@university.edu",
    phone: "9800000003"
  },
  {
    student_id: "S104",
    name: "Omar Ali",
    department: "Mechanical",
    year: 4,
    email: "omar.ali@university.edu",
    phone: "9800000004"
  },
  {
    student_id: "S105",
    name: "Sara Joseph",
    department: "Civil",
    year: 2,
    email: "sara.joseph@university.edu",
    phone: "9800000005"
  },
  {
    student_id: "S106",
    name: "Neha Sharma",
    department: "Computer Science",
    year: 3,
    email: "neha.sharma@university.edu",
    phone: "9800000006"
  },
  {
    student_id: "S107",
    name: "Bilal Ahmed",
    department: "Electrical",
    year: 1,
    email: "bilal.ahmed@university.edu",
    phone: "9800000007"
  },
  {
    student_id: "S108",
    name: "Maya Nair",
    department: "Information Technology",
    year: 4,
    email: "maya.nair@university.edu",
    phone: "9800000008"
  },
  {
    student_id: "S109",
    name: "John Mathew",
    department: "Computer Science",
    year: 2,
    email: "john.mathew@university.edu",
    phone: "9800000009"
  },
  {
    student_id: "S110",
    name: "Zara Siddiqui",
    department: "Electronics",
    year: 1,
    email: "zara.siddiqui@university.edu",
    phone: "9800000010"
  }
]);

print("Inserting 5 course records...");
courses.insertMany([
  {
    course_id: "C201",
    course_name: "Database Systems",
    faculty: "Dr. Priya Menon",
    credits: 4
  },
  {
    course_id: "C202",
    course_name: "Data Structures",
    faculty: "Prof. Arjun Rao",
    credits: 3
  },
  {
    course_id: "C203",
    course_name: "Operating Systems",
    faculty: "Dr. Leena Mathew",
    credits: 4
  },
  {
    course_id: "C204",
    course_name: "Digital Electronics",
    faculty: "Prof. Sameer Khan",
    credits: 3
  },
  {
    course_id: "C205",
    course_name: "Machine Learning",
    faculty: "Dr. Nidhi Verma",
    credits: 5
  }
]);

print("Inserting enrollment records...");
enrollments.insertMany([
  { enrollment_id: "E301", student_id: "S101", course_id: "C201", semester: "Spring 2026", grade: "A" },
  { enrollment_id: "E302", student_id: "S101", course_id: "C202", semester: "Spring 2026", grade: "B+" },
  { enrollment_id: "E303", student_id: "S102", course_id: "C201", semester: "Spring 2026", grade: "A-" },
  { enrollment_id: "E304", student_id: "S103", course_id: "C204", semester: "Fall 2025", grade: "B" },
  { enrollment_id: "E305", student_id: "S104", course_id: "C203", semester: "Spring 2026", grade: "B+" },
  { enrollment_id: "E306", student_id: "S105", course_id: "C201", semester: "Fall 2025", grade: "A" },
  { enrollment_id: "E307", student_id: "S106", course_id: "C205", semester: "Spring 2026", grade: "A-" },
  { enrollment_id: "E308", student_id: "S107", course_id: "C204", semester: "Spring 2026", grade: "B-" },
  { enrollment_id: "E309", student_id: "S108", course_id: "C205", semester: "Fall 2025", grade: "A+" },
  { enrollment_id: "E310", student_id: "S109", course_id: "C202", semester: "Spring 2026", grade: "B" },
  { enrollment_id: "E311", student_id: "S110", course_id: "C204", semester: "Spring 2026", grade: "A" },
  { enrollment_id: "E312", student_id: "S102", course_id: "C203", semester: "Fall 2025", grade: "B+" }
]);

print("\n===================== READ OPERATIONS =====================\n");

print("1. Display all students");
printjson(students.find({}, { _id: 0 }).sort({ student_id: 1 }).toArray());

print("\n2. Display all courses");
printjson(courses.find({}, { _id: 0 }).sort({ course_id: 1 }).toArray());

print("\n3. Find a student by student_id = S103");
printjson(students.findOne({ student_id: "S103" }, { _id: 0 }));

print("\n4. Find students from Computer Science department");
printjson(
  students.find(
    { department: "Computer Science" },
    { _id: 0, student_id: 1, name: 1, department: 1, year: 1 }
  ).sort({ student_id: 1 }).toArray()
);

print("\n5. Find courses with credits greater than 3");
printjson(
  courses.find({ credits: { $gt: 3 } }, { _id: 0 })
    .sort({ credits: -1, course_id: 1 })
    .toArray()
);

print("\n6. Show all enrollments of student S101");
printjson(
  enrollments.aggregate([
    { $match: { student_id: "S101" } },
    {
      $lookup: {
        from: "courses",
        localField: "course_id",
        foreignField: "course_id",
        as: "course_details"
      }
    },
    { $unwind: "$course_details" },
    {
      $project: {
        _id: 0,
        enrollment_id: 1,
        student_id: 1,
        course_id: 1,
        course_name: "$course_details.course_name",
        semester: 1,
        grade: 1
      }
    },
    { $sort: { enrollment_id: 1 } }
  ]).toArray()
);

print("\n==================== UPDATE OPERATIONS ====================\n");

print("1. Update student phone number and email for S101");
students.updateOne(
  { student_id: "S101" },
  {
    $set: {
      phone: "9898989898",
      email: "aisha.khan2026@university.edu"
    }
  }
);
printjson(students.findOne({ student_id: "S101" }, { _id: 0 }));

print("\n2. Update course faculty name for C205");
courses.updateOne(
  { course_id: "C205" },
  { $set: { faculty: "Dr. Kavya Nair" } }
);
printjson(courses.findOne({ course_id: "C205" }, { _id: 0 }));

print("\n3. Update student year for S107");
students.updateOne(
  { student_id: "S107" },
  { $set: { year: 2 } }
);
printjson(students.findOne({ student_id: "S107" }, { _id: 0 }));

print("\n4. Update grade in enrollment E308");
enrollments.updateOne(
  { enrollment_id: "E308" },
  { $set: { grade: "B+" } }
);
printjson(enrollments.findOne({ enrollment_id: "E308" }, { _id: 0 }));

print("\n==================== DELETE OPERATIONS ====================\n");

print("1. Delete one student record: S110");
students.deleteOne({ student_id: "S110" });
printjson(
  students.find({}, { _id: 0, student_id: 1, name: 1 })
    .sort({ student_id: 1 })
    .toArray()
);

print("\n2. Delete one course record: C204");
courses.deleteOne({ course_id: "C204" });
printjson(courses.find({}, { _id: 0 }).sort({ course_id: 1 }).toArray());

print("\n3. Delete all enrollments for semester Fall 2025");
enrollments.deleteMany({ semester: "Fall 2025" });
printjson(enrollments.find({}, { _id: 0 }).sort({ enrollment_id: 1 }).toArray());

print("\n==================== SCREENSHOTS OF OUTPUTS ====================\n");
print("Run this script in MongoDB shell or MongoDB Compass playground");
print("and capture screenshots of the CREATE, READ, UPDATE, and DELETE outputs.");

print("\n======================== FINAL SUMMARY ========================\n");
print("Create:");
print("Inserted student, course, and enrollment records.");
print("\nRead:");
print("Displayed records, filtered students and courses, and viewed a student's enrollments.");
print("\nUpdate:");
print("Updated student contact details, faculty name, student year, and enrollment grade.");
print("\nDelete:");
print("Deleted one student, one course, and multiple enrollment records.");
print("\nLearning Outcome:");
print("This project demonstrates practical use of MongoDB CRUD operations");
print("and aggregation in a student course registration system.");
