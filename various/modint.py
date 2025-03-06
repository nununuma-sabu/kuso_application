class ModInt:
    MOD = 998244353

    def __init__(self, x: int):
        self.x = x % self.MOD

    def __add__(self, other):
        if isinstance(other, ModInt):
            return ModInt(self.x + other.x)
        elif isinstance(other, int):
            return ModInt(self.x + other)
        return NotImplemented

    def __sub__(self, other):
        if isinstance(other, ModInt):
            return ModInt(self.x - other.x)
        elif isinstance(other, int):
            return ModInt(self.x - other)
        return NotImplemented

    def __mul__(self, other):
        if isinstance(other, ModInt):
            return ModInt(self.x * other.x)
        elif isinstance(other, int):
            return ModInt(self.x * other)
        return NotImplemented

    def __truediv__(self, other):
        if isinstance(other, ModInt):
            return self * other.inverse()
        elif isinstance(other, int):
            return self * ModInt(other).inverse()
        return NotImplemented

    def inverse(self):
        if self.x == 0:
            raise ZeroDivisionError("Cannot divide by zero")
        return ModInt(pow(self.x, self.MOD - 2, self.MOD))

    def __eq__(self, other):
        if isinstance(other, ModInt):
            return self.x == other.x
        elif isinstance(other, int):
            return self.x == other % self.MOD
        return False

    def __repr__(self):
        return str(self.x)

    def __pow__(self, other):
        return ModInt(pow(self.x, other, self.MOD))


# 例
if __name__ == "__main__":
    o = ModInt(1)
    a = ModInt(3)
    b = ModInt(4)
    print(a + b)  # 7
    print(a - b)  # 998244352
    print(a * b)  # 12
    print(a / b)  # 249561089
    print(a == b)  # False
    print(a == 3)  # True
    print(a**10)  # 59049
