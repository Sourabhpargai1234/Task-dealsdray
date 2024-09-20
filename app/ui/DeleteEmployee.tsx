

const DeleteEmployee = async (id: string) => {
  try {
    const response = await fetch(`/api/auth/EmployeeApi?id=${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error('Failed to delete employee');
    }
    console.log("Deleted Employee id", id);
    return true;
  } catch (error) {
    console.error("Error deleting employee:", error);
    return false;
  }
};

export default DeleteEmployee;
