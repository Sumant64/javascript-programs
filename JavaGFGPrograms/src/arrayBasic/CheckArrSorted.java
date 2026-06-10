package arrayBasic;

public class CheckArrSorted {
	
	public static boolean checkForSorted(int[] arr) {
		
		for(int i = 1; i < arr.length; i++) {
			if(arr[i] < arr[i - 1]) {
				return false;
			}
		}
		return true;
	}

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int [] arr = new int[] {1, 2, 3, 4, 5, 2};
		boolean res = checkForSorted(arr);
		
		System.out.println(res);
	}

}
